import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './docs';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { isAuth } from './middlewares/auth';
import rateLimit from 'express-rate-limit'
import apicache from 'apicache'

dotenv.config();

const app = express();

const auth_service = process.env.AUTH_SERVICE;
const treatment_service = process.env.TREATMENT_SERVICE;
// Define a proxy for each microservice
const authProxy = createProxyMiddleware({
  target: auth_service,
  changeOrigin: true,
});

const treatmentProxy = createProxyMiddleware({
  target: treatment_service,
  changeOrigin: true,
});

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
})
let cache = apicache.middleware
// express configuration

/** Welcome Route */
app.get('/', (_, res) => {
  return res.status(200).json({
      status: 200,
      message: "Welcome to the API Gateway"
  })
})
// Apply the rate limiting middleware to all requests
app.use(limiter)
app.set('trust proxy', 1)
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(morgan('combined', { stream: accessLogStream }))
// authantication confiduration
app.use(isAuth);

// Register the proxies with the main Express application
app.use('/api', authProxy);
app.use('/products', cache('5 minutes'), treatmentProxy);
app.use(
  `/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerOptions),
);
app.use('*', (req, res) => {
  res
    .status(404)
    .json({ status: 404, message: 'This endpoint is not exist' });
});
// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Gateway server start at http://localhost:${PORT}`);
});

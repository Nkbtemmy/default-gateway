import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { isAuth } from './middlewares/auth';

dotenv.config();

const app = express();

// Define a proxy for each microservice
const userProxy = createProxyMiddleware({
  target: 'http://user-service:4000',
  changeOrigin: true,
});

const productProxy = createProxyMiddleware({
  target: 'http://product-service:5000',
  changeOrigin: true,
});

// express configuration
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(morgan('combined', { stream: accessLogStream }))
// authantication confiduration
app.use(isAuth);

// Register the proxies with the main Express application
app.use('/api/users', userProxy);
app.use('/api/products', productProxy);

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Gateway server start at localhost:${PORT}`);
});

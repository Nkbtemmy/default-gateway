import dotenv from 'dotenv';
import swaggerDoc from './swagger.json';
import patient from './users/patients';
import pharmacists from './users/pharmacist';
import physician from './users/physician';
const defaults = swaggerDoc.paths;

dotenv.config();

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST.split('https://')[1]
    : process.env.HOST.split('http://')[1];

const paths = {
  ...defaults,
  ...patient,
  ...pharmacists,
  ...physician,
};

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'E-Health APIs Documentation',
    description: '',
  },
  host,
  basePath: `/api`,
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'E-Health APIs Documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths,
};
export default config;

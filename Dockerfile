# Base image
FROM node:lts-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
# Install pm2 globally
RUN npm install -g pm2

# Development image
FROM base AS dev
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run", "dev"]

# Production image
FROM base AS prod
ENV NODE_ENV=production
ENV HOST=https://e-hospital-bn-auth.onrender.com
ENV AUTH_SERVICE=https://e-hospital-bn-auth.onrender.com
ENV TREATMENT_SERVICE=http://localhost:8000
COPY . .
# RUN npm run build
# CMD ["npm", "start"]
CMD ["pm2-runtime", "start", "npm", "--", "start", "-i", "max"]
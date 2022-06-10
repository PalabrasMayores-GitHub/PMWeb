FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY client/package*.json client/
COPY server/package*.json server/

COPY client/ client/
COPY server/ server/

WORKDIR /app/client
RUN npm install --only=production
RUN npm run buildDocker

WORKDIR /app/server
RUN npm install --only=production

WORKDIR /app
USER node
CMD ["npm", "start", "--prefix", "server"]

EXPOSE 3000
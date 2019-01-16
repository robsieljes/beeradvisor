FROM node:10

WORKDIR /home/node/app/
COPY api-server/package*.json ./
RUN npm install
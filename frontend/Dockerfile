FROM node:17-slim

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

CMD ["npm", "start"]

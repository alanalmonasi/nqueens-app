FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . . 

ENV PORT 5173

CMD [ "yarn", "dev" ]
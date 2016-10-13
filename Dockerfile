FROM node:4.6
MAINTAINER Aaron Chen<mail@aaronchen.cn>

RUN mkdir /demo
WORKDIR /demo
COPY package.json .
RUN npm install

COPY webpack.config.js .

EXPOSE 8080

FROM node:4.6
MAINTAINER Aaron Chen<mail@aaronchen.cn>

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 8080

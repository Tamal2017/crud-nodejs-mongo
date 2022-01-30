FROM node:14-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=admin

RUN mkdir -p /home/app

COPY ./app /home/app

CMD ["node", "/home/app/server.js"]
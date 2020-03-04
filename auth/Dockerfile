FROM node:12-alpine3.10

ENV HOME=/home/app

WORKDIR $HOME
COPY ./package.json ./package-lock.json $HOME/
RUN npm ci

COPY ./ $HOME

EXPOSE 3000

CMD ["./bin/www"]

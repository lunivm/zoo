FROM node:12-alpine3.10

WORKDIR /home/app

# build node_modules
COPY ./package.json ./package-lock.json ./
RUN npm ci

# copy source code
COPY ./ ./

EXPOSE 3000

CMD ["./bin/www"]

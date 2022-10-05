FROM node:12.16.1-alpine3.9

# Create app directory
WORKDIR /usr/app

# Install app dependencies

COPY package.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]
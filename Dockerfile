FROM node:latest

# Bundle app source
COPY . app/
WORKDIR app/

# Install app dependencies
RUN npm install \
  && npm install -g gulp \
  && gulp build:production

EXPOSE 8080
CMD [ "node", "dist/server.js" ]

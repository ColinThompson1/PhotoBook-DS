FROM node:11.6

# Create app directory
WORKDIR /usr/src/ds

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV DB_CON_STR=mongodb://mongouser:il0vemongoDB!@cpsc559-mongodbatlas-cluster-shard-00-00-r1lqr.azure.mongodb.net:27017,cpsc559-mongodbatlas-cluster-shard-00-01-r1lqr.azure.mongodb.net:27017,cpsc559-mongodbatlas-cluster-shard-00-02-r1lqr.azure.mongodb.net:27017/test?ssl=true&replicaSet=CPSC559-mongodbAtlas-cluster-shard-0&authSource=admin&retryWrites=true
ENV DB_CON_STR=mongodb://mongouser:il0vemongoDB!@cpsc559paid-shard-00-00-r1lqr.azure.mongodb.net:27017,cpsc559paid-shard-00-01-r1lqr.azure.mongodb.net:27017,cpsc559paid-shard-00-02-r1lqr.azure.mongodb.net:27017/photobook?ssl=true&replicaSet=Cpsc559Paid-shard-0&authSource=admin&retryWrites=true
ENV USE_SSL=true

EXPOSE 3002
CMD [ "npm", "start" ]
# Referenced docker content https://www.project-piper.io/steps/transportRequestUploadCTS/

FROM node
USER root

RUN npm install -global @ui5/cli @sap/ux-ui5-tooling @ui5/logger @ui5/fs

# Create app directory
WORKDIR /usr/src/app

# Bundle everything, append dockerignore if you want to ignore anything
COPY . .

RUN npm install

# Build dist folder
RUN npm run build

USER node

CMD [ "npm", "-v"]
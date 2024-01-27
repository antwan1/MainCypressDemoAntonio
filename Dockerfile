FROM  cypress/base:20.10.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN ["npm", "run", "cy:run"]
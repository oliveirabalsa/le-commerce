const express = require('express');
const routes = require('./routes');
const cors = require('cors');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;

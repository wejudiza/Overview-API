const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./server/router.js');

const server = express();
const port = 8080;

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(cors());

// server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/products', router);

module.exports = server;

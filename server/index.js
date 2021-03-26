require('newrelic');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./router.js');

const server = express();
const port = 8080;

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(cors());

// server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);
server.get('/loaderio-280b6d9a39cbc4e6489db27a2252ca50', (req, res) => {
  res.send('loaderio-280b6d9a39cbc4e6489db27a2252ca50')
})

server.listen(port, () => console.log(`Listening on port ${port}`));
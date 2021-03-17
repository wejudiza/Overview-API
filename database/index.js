const postgresql = require('postgresql');

var connection = postgresql.createConnection({
  user: 'root',
  password: '',
  database: 'atelier-products'
});

connection.connect();

module.exports = connection;
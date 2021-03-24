const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  database: 'docker_postgres_products',
  host: '54.193.18.226',
  port: 5432
});

module.exports = pool;
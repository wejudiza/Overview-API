const pool = require('./');

module.exports = {
  getAllProducts: (callback) => {
    pool.query('SELECT * FROM info LIMIT 5', (err, results) => {
      callback(err, results);
    })
  },
  getProductInfo: (id, callback) => {
    var queryStr = `SELECT i.id, i.name, i.slogan, i.description, i.category, i.default_price, json_agg(json_build_object('feature', f.feature, 'value', f.value)) AS features FROM info i LEFT JOIN features f ON (i.id = f.product_id) WHERE i.id=${id} GROUP BY i.id;`;
    pool.query(queryStr, (err, results) => {
      callback(err, results);
    })
  },
  getStyles: (id, callback) => {
    var queryStr = `select * from styles_results where product_id ='${id}'`;
    pool.query(queryStr, (err, results) => {
      callback(err, results);
    })
  },
  getRelatedProducts: (id, callback) => {
    pool.query(`SELECT json_agg(related_product_id) FROM related WHERE current_product_id=${id}`, (err, results) => {
      callback(err, results);
    })
  }
};

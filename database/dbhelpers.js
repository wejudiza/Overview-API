const pool = require('./');

module.exports = {
  getAllProducts: (callback) => {
    pool.query('SELECT * FROM test', (err, results) => {
      callback(err, results);
    })
  },
  getProductInfo: (id, callback) => {
    pool.query(`select i.name, i.slogan, i.description, i.category, i.default_price, f.feature, f.value from info i inner join features f on (i.id = f.product_id) where i.id=${id}`, (err, results) => {
      callback(err, results);
    })
  },
  // getStyles: (id, body, callback) => {
  //   pool.query(`UPDATE groceryList2 SET quantity=${body.quantity} WHERE id=${id}`, (err) => {
  //     callback(err);
  //   })
  // },
  // getRelatedProducts: (id, callback) => {
  //   pool.query(`DELETE FROM groceryList2 WHERE id=${id}`, (err) => {
  //     callback(err);
  //   })
  // }
};
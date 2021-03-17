const pool = require('./');

module.exports = {
  getAllProducts: (callback) => {
    pool.query('SELECT * FROM info', (err, results) => {
      callback(err, results);
    })
  },
  getProductInfo: (body, callback) => {
    pool.query(`INSERT INTO groceryList2 (item, quantity) VALUES ("${body.item}", ${body.quantity})`, (err) => {
      callback(err);
    })
  },
  getStyles: (id, body, callback) => {
    pool.query(`UPDATE groceryList2 SET quantity=${body.quantity} WHERE id=${id}`, (err) => {
      callback(err);
    })
  },
  getRelatedProducts: (id, callback) => {
    pool.query(`DELETE FROM groceryList2 WHERE id=${id}`, (err) => {
      callback(err);
    })
  }
};
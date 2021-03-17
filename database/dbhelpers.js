const db = require('./');

module.exports = {
  getAllProducts: (callback) => {
    db.query('SELECT * FROM groceryList2', (err, results) => {
      callback(err, results);
    })
  },
  getProductInfo: (body, callback) => {
    db.query(`INSERT INTO groceryList2 (item, quantity) VALUES ("${body.item}", ${body.quantity})`, (err) => {
      callback(err);
    })
  },
  getStyles: (id, body, callback) => {
    db.query(`UPDATE groceryList2 SET quantity=${body.quantity} WHERE id=${id}`, (err) => {
      callback(err);
    })
  },
  getRelatedProducts: (id, callback) => {
    db.query(`DELETE FROM groceryList2 WHERE id=${id}`, (err) => {
      callback(err);
    })
  }
};
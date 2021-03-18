const pool = require('./');

module.exports = {
  getAllProducts: (callback) => {
    pool.query('SELECT * FROM test', (err, results) => {
      callback(err, results);
    })
  },
  getProductInfo: (id, callback) => {
    var testq = "select i.id, i.name, i.slogan, i.description, i.category, i.default_price, json_agg(json_build_object('feature', f.feature, 'value', f.value)) AS features from info i inner join features f on (i.id = f.product_id) where i.id=1 group by i.id;"
    var queryStr = `select i.id, i.name, i.slogan, i.description, i.category, i.default_price, json_agg(json_build_object('feature', f.feature, 'value', f.value)) AS features from info i inner join features f on (i.id = f.product_id) where i.id=${id} group by i.id;`;

    pool.query(queryStr, (err, results) => {
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
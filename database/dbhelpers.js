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
    var queryStr =
    `SELECT
      s.product_id,
      json_agg(
        json_build_object(
            'style_id', s.style_id,
            'name', s.name,
            'original_price', s.original_price,
            'sale_price', s.sale_price,
            'default?', s.default_style,
            'photos', photos,
            'skus', skus
        )
      ) results
    FROM styles s
    LEFT JOIN (
      SELECT
        skus.style_id,
        json_object_agg(skus.id,
          json_build_object(
            'quantity', skus.quantity,
            'size', skus.size
          )
        ) skus
      FROM skus
      GROUP BY skus.style_id
    ) skus ON (s.style_id = skus.style_id)
    LEFT JOIN (
      SELECT
        p.style_id,
        json_agg(
          json_build_object(
            'thumbnail_url', p.thumbnail_url,
            'url', p.url
          )
        ) photos
      FROM photos p
      GROUP BY p.style_id
    ) p ON (s.style_id = p.style_id)
    where s.product_id='${id}'
    GROUP BY s.product_id;`;
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

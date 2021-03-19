const db = require('../database/dbhelpers.js');

const controller = {
  // to retrive a list of ALL products
  getAllProducts: (req, res) => {
    db.getAllProducts((err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows);
    });
  },
  // to retrieve product info for specific product id
  getProductInfo: (req, res) => {
    db.getProductInfo(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0]);
    });
  },
  // to retrieve all styles of current product
  getStyles: (req, res) => {
    db.getStyles(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0]);
    });
  },
  // to retrieve related products of current product
  getRelatedProducts: (req, res) => {
    db.getRelatedProducts(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0].json_agg);
    });
  }
}

module.exports = controller;
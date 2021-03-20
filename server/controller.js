const db = require('../database/dbhelpers.js');

const controller = {
  getAllProducts: (req, res) => {
    db.getAllProducts((err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows);
    });
  },
  getProductInfo: (req, res) => {
    db.getProductInfo(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0]);
    });
  },
  getStyles: (req, res) => {
    db.getStyles(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0]);
    });
  },
  getRelatedProducts: (req, res) => {
    db.getRelatedProducts(req.params.product_id, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results.rows[0].json_agg);
    });
  }
}

module.exports = controller;
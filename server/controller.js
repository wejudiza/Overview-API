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
    db.getProductId(req, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results);
    });
  },
  // to retrieve all styles of current product
  getStyles: (req, res) => {
    db.getProductStyles(req, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results);
    });
  },
  // to retrieve related products of current product
  getRelatedProducts: (req, res) => {
    db.getRelatedProducts(req, (err, results) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(results);
    });
  }
}

module.exports = controller;
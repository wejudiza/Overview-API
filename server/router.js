const router = require('express').Router();
const controller = require('./controller');

router
  .route('/products/')
  .get(controller.getAllProducts)

router
  .route('/products/:product_id')
  .get(controller.getProductInfo)

router
  .route('/products/:product_id/styles')
  .get(controller.getStyles)

router
  .route('/products/:product_id/related')
  .get(controller.getRelatedProducts)

  module.exports = router;
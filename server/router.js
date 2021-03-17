const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.getAllProducts)

router
  .route('/:product_id')
  .get(controller.getProductInfo)

router
  .route('/:product_id/styles')
  .get(controller.getStyles)

router
  .route('/:product_id/related')
  .get(controller.getRelatedProducts)

  module.exports = router;
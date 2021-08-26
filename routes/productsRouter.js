const express = require('express')

const router = express.Router();

const productsController = require('../controllers/ProductController')

router
    .route('/')
    .get(productsController.getProducts)
    .post(productsController.createProduct)

router
    .route('/:id')
    .get(productsController.getProductById)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct)

module.exports = router
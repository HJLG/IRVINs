const express = require('express')

const router = express.Router();

const productsController = require('../controllers/ProductController')

router
    .route('/')
    .get(productsController.getProducts)
    .post(productsController.createProduct)

module.exports = router
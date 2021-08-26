const express = require('express')
const app = express()
const productsRouter = require('./routes/productsRouter')

app.use(express.json())

app.use('/api/products', productsRouter)

module.exports = app
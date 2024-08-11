const express = require('express');
// const Product = require('./product.model.js')
const router = express.Router()
const {getProducts,getProduct,postProduct , deleteProduct ,updatetProduct} = require('../controllers/product.controllers.js')


router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',postProduct)
router.delete('/:id',deleteProduct)
router.put('/:id',updatetProduct)

module.exports = router ;

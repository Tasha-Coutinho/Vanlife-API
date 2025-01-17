//vAN-ROUTER.JS

const express = require('express');
const router = express.Router();
const Product = require('../models/products-model');

const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/van-controller.js');

router.get('/',getProducts); 
router.get('/:id',getProduct); 
router.post('/',createProduct); 
router.put('/:id',updateProduct); 
router.delete('/:id',deleteProduct); 

module.exports = router;

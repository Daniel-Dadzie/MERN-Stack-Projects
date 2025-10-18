// import
const express = require('express');
const Product = require('../models/productModels');
const router = express.Router();

// import productController
const {getProducts} = require('../controller/productController');
const {getProduct} = require('../controller/productController');
const {newProduct} = require('../controller/productController');
const {updateProduct} = require('../controller/productController');
const {delProduct} = require('../controller/productController');

// api crud operation

// get all products
router.get('/', getProducts);

// get product by id
router.get('/:id', getProduct);

// create a new product
router.post('/', newProduct);

// update a product by id 
router.put('/:id', updateProduct);

// delete a product by id
router.delete('/:id', delProduct);



// export route to the index.js

module.exports = router;
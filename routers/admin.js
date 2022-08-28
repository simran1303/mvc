const path = require('path');
const express= require('express');
const router = express.Router();


const ProductController = require('../controllers/product')


router.get('/product',ProductController.getProduct);

router.post('/product',ProductController.postProduct)

module.exports = router;
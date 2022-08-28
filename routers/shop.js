const path = require('path')
//const rootDir = require('../util/path');
// const adminRoute = require('./admin')
const express= require('express');
const router = express.Router();

const ShopControllers =require('../controllers/product')


router.get('/',ShopControllers.getShopProduct);


module.exports =router;
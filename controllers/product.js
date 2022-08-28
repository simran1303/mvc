const Product = require('../models/product1')


const getProduct = (req, res) => {
  // res.sendFile(path.join(__dirname,'../views/product.html'));
  res.render('product', {
    pageTitle: 'Add Product',
    path: '/admin/product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}


const postProduct = (req, res) => {
  // products.push({title : req.body.title})
  // res.send(products)

  const product = new Product(req.body.title)
  product.save();
  res.redirect('/');   // shop get
}



const getShopProduct = (req, res) => {
  Product.fetchAll(products => {

    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });

  });
}


module.exports = { getProduct, postProduct, getShopProduct }
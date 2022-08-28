const path= require('path');
const express= require('express');
const app =express();
const adminRoute= require('./routers/admin');
const shopRoute= require('./routers/shop');

const errorController = require('./controllers/page404')


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({extended :true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/admin',adminRoute)
app.use(shopRoute);


app.use(errorController.page404)

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});
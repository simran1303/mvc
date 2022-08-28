// const products =[];

// this file 1st part(before change) of the product.js file    


const fs = require('fs');
const path = require('path');

module.exports = class Product{

    constructor(t){
        this.title =t;
    }

    save(){
        //products.push(this);
        const p = path.join(__dirname,'../data/products.json');

        fs.readFile(p,(err,data)=>{
            let products =[];
            console.log(err)
            
            if(!err){
             
                products= JSON.parse(data)
            }
          products.push(this);
          fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
          })
        })
    }

    static fetchAll(callb){

        const p = path.join(__dirname,'../data/products.json');

        fs.readFile(p,(err,data)=>{
            
            if(err)  callb([]); //return[];
            
            //return JSON.parse(data)

            callb(JSON.parse(data))

          })
    
    }
}
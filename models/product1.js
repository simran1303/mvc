// const products =[];

const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../data/products.json');


const getProductFromfile = (callb) => {

    fs.readFile(p, (err, data) => {

        if (err) {
            callb([]);
        }
        else {
            callb(JSON.parse(data))
        }

    })

}

module.exports = class Product {

    constructor(t) {
        this.title = t;
    }

    save() {
        //products.push(this);
        getProductFromfile(products => {

            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })

        });
    }

    static fetchAll(callb) {

        getProductFromfile(callb);
    }
}
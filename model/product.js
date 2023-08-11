const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        required:true,
        type: String
    },
    link:{
        require:true,
        type: String
    },
    image:{
        require:true,
        type: String
    },
    price: {
        required:true,
        type: String
    }


});

module.exports = mongoose.model("product",productSchema,'product')
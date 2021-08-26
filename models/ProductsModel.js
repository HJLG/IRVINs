const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductsSchema = new Schema({
    createdAt : {
        type : Date,
        default : Date.now(),
        required : true
    },
    updatedAt : {
        type : Date,
        default : Date.now(),
        required : true 
    },
    name : {
        type : String,
        required : [true, "enter product name"]
    },
    price : {
        type : Number,
        required : [true, "enter price"],
        min : 1,
    },
    description : {
        type : String,
    },
    image : {
        type : String,
    },
    tags : [String],
})

const Products = mongoose.model('Products', ProductsSchema)

module.exports = Products
const mongoose = require('mongoose')
const { type } = require('os')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        reqired: true,
        default: 0
    },

    image: {
        type: String,
        required: false
    },
},{
    timestamps: true
}

);

const Product = mongoose.model("Product", productSchema)

module.exports = Product;
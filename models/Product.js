const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    insertionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Products', ProductSchema);
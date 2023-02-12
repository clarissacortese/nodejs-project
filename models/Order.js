const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
    productId: {
        type: [Schema.Types.ObjectId],
        ref: 'Products',
        required: true
    },
    userId: {
        type: [Schema.Types.ObjectId],
        ref: 'Users',
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Orders', OrderSchema);
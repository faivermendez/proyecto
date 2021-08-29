const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            trime: true,
            require: true,
            maxlenght: 35,
        },
        description: {
            type: String,
            trime: true,
            require: true,
            maxlenght: 200,
        },
        price: {
            type: Number,
            trime: true,
            require: true,
            maxlenght: 18,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require: true,
        },
        quantity: {
            type: Number,
        },
        photo: {
            data: Buffer,
            contentType: String,
        },
    },
    { timestamps:  true }
);
module.exports = mongoose.model("Product", productSchema);
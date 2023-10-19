const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
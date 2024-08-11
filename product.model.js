const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  Price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    productName: String,
    productPrice: String,
    productDescription: String,
    productCategory: String,
    productImage:String
  });
  const Product = mongoose.model("Product", productSchema);
  module.exports=Product
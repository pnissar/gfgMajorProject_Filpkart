import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  otp: String,
});

const products = new Schema({
  Img: String,
  Name: String,
  Price: String,
  Description: String,
  Type: String,
  SubType: String,
});
const cart = new Schema({
  Name: String,
  Email: String,
  Product: String,
  volume: Number,
});

const User = mongoose.model("User", userSchema);
const Products = mongoose.model("Products", products);
const Cart=mongoose.model("Cart",cart);

export { User, Products, Cart };

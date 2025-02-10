import express from "express";
import {
  register,
  login,
  logout,
  getUser,
  prereg,
  prelogin,
  getProducts,
  getCart,
  addCart,
  removeCart,
} from "../auth/auth.js";
import { isAuthenticated } from "../middleware/auth.js";

export const route = express.Router();
route.post("/sign", register);
route.post("/login", login);
route.post("/presign", prereg);
route.post("/prelogin", prelogin);
route.get("/logout", isAuthenticated, logout);
route.get("/me", getUser);
route.get("/products", getProducts);
route.post("/cart", getCart);
route.post("/addcart", addCart);
route.delete("/removecart", removeCart);

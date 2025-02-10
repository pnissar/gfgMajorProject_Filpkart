import { User } from "../model/data.model.js";
import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(200).json({ success: false, message: "User is not found" });
    }
    const decoded =  jwt.verify(token, process.env.SECRATE_KEY);
    req.user = await User.findOne({ exu: decoded.exu });
    next();
};

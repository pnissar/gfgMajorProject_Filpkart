import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User, Products, Cart } from "../model/data.model.js";
import { emaill } from "../utils/email.js";
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const prereg = async (req, res) => {
  const { name, email, age } = req.body;
  if (!email || !name || !age) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    const exu = await User.findOne({ email });
    if (exu) {
      return res.json({ success: false, message: "Mail is already used" });
    }

    const otp = generateOTP();

    const rnew = new User({ name, email, age, otp });
    await rnew.save();
    await emaill({
      email: email,
      subject: "Your verification code:",
      otp,
    })
      .then(() => res.json({ success: true, message: "OTP SENT" }))
      .catch((err) => res.json({ success: false, message: err.message }));
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const register = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    const exu = await User.findOne({ email });
    if (exu.otp != otp) {
      return res.json({ success: false, message: "fill OTP correctly" });
    }
    const name = exu.name;
    const age = exu.age;
    const token = jwt.sign({ email, name, age }, process.env.SECRATE_KEY, {
      expiresIn: process.env.JWT_E,
    });
    res.status(200).clearCookie("token");
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_E * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        exu,
        token,
        success: true,
        message: `Hi ${exu.name}`,
      });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const prelogin = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    const exu = await User.findOne({ email });
    if (!exu) {
      return res.json({ success: false, message: "User doesnot exist" });
    }
    const otp = generateOTP();
    exu.otp = otp;
    await exu.save();
    await emaill({
      email: email,
      subject: "Your verification code:",
      otp,
    })
      .then(() => res.json({ success: true, message: "OTP SENT" }))
      .catch((err) => res.json({ success: false, message: err.message }));
  } catch (error) {
    res.json(error.message);
  }
};

export const login = async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    const exu = await User.findOne({ email });
    if (!exu) {
      return res.json({ success: false, message: "User doesnot exist" });
    }
    if (exu.otp != otp) {
      return res.json({ success: false, message: "OTP is not matched" });
    }
    const name = exu.name;
    const age = exu.age;
    res.status(200).clearCookie("token");
    const token = jwt.sign({ email, name, age }, process.env.SECRATE_KEY, {
      expiresIn: process.env.JWT_E,
    });
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_E * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      })
      .json({
        exu,
        token,
        success: true,
        message: `Hi ${exu.name}`,
      });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).clearCookie("token").json({ message: "Cookie cleared" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = req.cookies.token;
    const decoded = jwt.verify(user, process.env.SECRATE_KEY);
    res.status(200).send({ success: true, decoded });
  } catch (error) {
    res.status(400).send({ success: false, message: "failed to get" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    const groupedData = await Products.aggregate([
      {
        $group: {
          _id: { Type: "$Type", SubType: "$SubType" }, // Group by Type & SubType
          items: { $push: "$$ROOT" }, // Collect all documents under each SubType
        },
      },
      {
        $group: {
          _id: "$_id.Type", // Group by Type
          SubTypes: {
            $push: {
              SubType: "$_id.SubType",
              items: "$items",
            },
          },
        },
      },
      {
        $project: {
          Types: "$_id",
          _id: 0,
          SubTypes: 1,
        },
      },
    ]);

    const l = products.length;
    res.status(200).send({ success: true, l, groupedData });
  } catch (error) {
    res.status(400).send({ success: false, message: "failed to get" });
  }
};

export const getCart = async (req, res) => {
  const { Email } = req.body;
  try {
    const cart = await Cart.find({ Email });
    res.status(200).send({ success: true, cart });
  } catch (error) {
    res.status(400).send({ success: false, message: "failed to get", Email });
  }
};
export const addCart = async (req, res) => {
  const { Name, Email, Product, volume } = req.body;
  if (!Name || !Email || !Product || !volume) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    const exu = await Cart.find({ Product });
    if (exu.length > 0) {
      return res.json({
        success: false,
        message: "Already in cart",
      });
    }
    const rnew = new Cart({ Name, Email, Product, volume });
    await rnew.save();
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export const removeCart = async (req, res) => {
  const { Name, Email, Product, volume } = req.body;
  if (!Name || !Email || !Product || !volume) {
    return res.json({ success: false, message: "fill deatils correctly" });
  }
  try {
    await Cart.deleteOne({ Name, Email, Product, volume });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

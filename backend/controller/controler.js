import mongoose from "mongoose";
import { User, Products } from "../model/data.model.js";
const connectt = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => {
      console.log("Connection done");
    })
    .catch((err) => {
      console.log(`Some error :${err}`);
    });
};

export { connectt };

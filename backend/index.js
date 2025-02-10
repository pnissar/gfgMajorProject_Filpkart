import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectt } from "./controller/controler.js";
import { route } from "./router/authrut.js";
const app = express();
const port = process.env.PORT || 2000;

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST"],
  })
);
connectt();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", route);

app.listen(port, () => console.log(`server started on port:${port}`));

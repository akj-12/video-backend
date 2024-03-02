import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { LIMIT_URL } from "./constants.js";
const app = express();

// middlewares
app.use(
  cors({
    origin: `${process.env.CROSS_ORIGIN}`,
    credentials: true,
  })
);
app.use(express.json({ limit: LIMIT_URL }));
app.use(express.urlencoded({ extended: true, limit: LIMIT_URL }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };

import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/catagory";
import mongoose from "mongoose";
import cors from "cors"


const app = express();
app.use(cors());

app.use(express.json());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);


mongoose.connect("mongodb+srv://hieuhop2003:hieuhop123@product.384kcvq.mongodb.net/?retryWrites=true&w=majority");

export const viteNodeApp = app;
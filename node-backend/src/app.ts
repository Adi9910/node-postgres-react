import userRouter from "./routes/user.routes"
import { errorHandler } from "./middlewares/error.middleware";
import cors from "cors";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRouter);
app.use(errorHandler);

export default app;
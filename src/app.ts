import express from "express";
import cors from "cors";
import diaryRouter from "./routers/diary";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", diaryRouter);

export default app;

import express from "express";
import diaryRouter from "./routers/diary";

const app = express();

app.use(express.json());
app.use("/api", diaryRouter);

export default app;

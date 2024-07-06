import express, { Request, Response } from "express";
import { createDiary, getAllDiaries, getById } from "../services/diaryServices";

const diaryRouter = express.Router();

diaryRouter.get("/diaries", getAllDiaries);
diaryRouter.get("/diaries/:diaryId", getById);
diaryRouter.post("/diaries", createDiary);

export default diaryRouter;

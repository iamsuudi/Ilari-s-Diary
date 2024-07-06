import express, { Request, Response } from "express";
import { getAllDiaries, getById } from "../services/diaryServices";

const diaryRouter = express.Router();

diaryRouter.get("/diaries", getAllDiaries);
diaryRouter.get("/diaries/:diaryId", getById);

export default diaryRouter;

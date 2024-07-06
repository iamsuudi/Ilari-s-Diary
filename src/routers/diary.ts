import express, { Request, Response } from "express";
import { getAllDiaries } from "../services/diaryServices";

const diaryRouter = express.Router();

diaryRouter.get("/diaries", getAllDiaries);

export default diaryRouter;

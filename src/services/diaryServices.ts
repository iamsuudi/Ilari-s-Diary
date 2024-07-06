import { Request, Response } from "express";
import diaryData from "../data/diaryEntries.json";

export const getAllDiaries = async (_req: Request, res: Response) => {
	return res.json(diaryData);
};

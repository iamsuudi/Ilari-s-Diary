import { Request, Response } from "express";
import diaryData from "../data/diaryEntries.json";
import { DiaryType, NonSensitiveDiaryEntry } from "../types";

export const getAllDiaries = async (_req: Request, res: Response) => {
	const diaries: DiaryType[] = <DiaryType[]>diaryData;

	const filteredDiaires: NonSensitiveDiaryEntry[] = diaries.map(
		({ comment, ...safe }) => safe
	);

	return res.json(filteredDiaires);
};

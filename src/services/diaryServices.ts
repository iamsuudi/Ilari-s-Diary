import { Request, Response } from "express";
import diaryData from "../data/diaryEntries.json";
import { DiaryType, NonSensitiveDiaryEntry } from "../types";

const diaries: DiaryType[] = <DiaryType[]>diaryData;

export const getAllDiaries = async (_req: Request, res: Response) => {
	const filteredDiaires: NonSensitiveDiaryEntry[] = diaries.map(
		({ comment, ...safe }) => safe
	);

	return res.json(filteredDiaires);
};

export const getById = async (
	req: Request<{ diaryId: number }>,
	res: Response
) => {
	const id = req.params.diaryId;

	const filteredDiaires: NonSensitiveDiaryEntry[] = diaries.map(
		({ comment, ...safe }) => safe
	);

	const diary: NonSensitiveDiaryEntry | undefined = filteredDiaires.find(
		(diary) => diary.id === Number(id)
	);

	return res.json(diary ?? {});
};

import { Request, Response } from "express";
import diaryData from "../data/diaryEntries.json";
import {
	DiaryEntry,
	DiaryType,
	NonSensitiveDiaryEntry,
	visibility,
	weather,
} from "../types";
import toNewDiaryEntry from "../utility/toNewDiaryEntry";

const diaries: DiaryType[] = <DiaryType[]>diaryData;

export const getAllDiaries = async (_req: Request, res: Response) => {
	const filteredDiaires: NonSensitiveDiaryEntry[] = diaries.map(
		({ comment, ...safe }) => safe
	);

	return res.status(200).json(filteredDiaires);
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

	return res.status(200).json(diary ?? {});
};

export const createDiary = async (
	req: Request<
		{},
		{},
		{
			date: string;
			weather: weather;
			visibility: visibility;
			comment: string;
		}
	>,
	res: Response
) => {
	try {
		const entry: DiaryEntry = toNewDiaryEntry(req.body);

		const newDiary: DiaryType = { ...entry, id: diaries.length + 1 };

		diaries.push(newDiary);

		return res.status(201).json(newDiary);
	} catch (error: any) {
		return res.status(400).json({ message: error.message });
	}
};

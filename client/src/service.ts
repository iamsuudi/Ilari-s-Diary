import axios from "axios";
import { DiaryEntry, DiaryType } from "./types";

const baseURL = "http://localhost:3000/api/";

export const getDiaries = async () => {
	const response = await axios<DiaryType[]>({
		method: "get",
		baseURL,
		url: "/diaries",
	});
	return response.data;
};

export const getDiary = async (diaryId: string) => {
	const response = await axios<DiaryType[]>({
		method: "get",
		baseURL,
		url: `diaries/${diaryId}`,
	});
	return response.data;
};

export const createDiary = async (diary: DiaryEntry) => {
	const response = await axios<DiaryType>({
		method: "post",
		baseURL,
		url: `diaries`,
		data: diary,
	});
	return response.data;
};

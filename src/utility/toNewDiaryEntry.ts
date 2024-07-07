import { DiaryEntry, visibility, weather } from "../types";

function isString(text: unknown): text is string {
	return typeof text === "string" || text instanceof String;
}

function isWeather(param: string): param is weather {
	return Object.values(weather)
		.map((v) => v.toString())
		.includes(param);
}

function isDate(date: string): boolean {
	return Boolean(Date.parse(date));
}

function isVisibility(param: string): param is visibility {
	return Object.values(visibility)
		.map((v) => v.toString())
		.includes(param);
}

function parseWeather(weather: unknown): weather {
	if (!weather || !isString(weather) || !isWeather(weather)) {
		throw new Error(`Incorrect or missing weather ${weather}`);
	}

	return weather;
}

function parseVisibility(visibility: unknown): visibility {
	if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
		throw new Error(`Incorrect or missing visibility ${visibility}`);
	}

	return visibility;
}

function parseDate(date: unknown): string {
	if (!date || !isString(date) || !isDate(date)) {
		throw new Error(`Incorrect or missing date: ${date}`);
	}

	return date;
}

function parseComment(comment: unknown): string {
	if (!comment || !isString(comment)) {
		throw new Error("Incorrect or missing comment");
	}

	return comment;
}

export default function toNewDiaryEntry(object: DiaryEntry): DiaryEntry {
	const newEntry: DiaryEntry = {
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
		comment: parseComment(object.comment),
	};

	return newEntry;
}

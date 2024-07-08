export enum weather {
	Sunny = "sunny",
	Rainy = "rainy",
	Cloudy = "cloudy",
	Windy = "windy",
	Stormy = "stormy",
}

export enum visibility {
	Great = "great",
	Good = "good",
	Ok = "ok",
	Poor = "poor",
}

export interface DiaryType {
	id: number;
	date: string;
	weather: weather;
	visibility: visibility;
	comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryType, "comment">;

export type DiaryEntry = Omit<DiaryType, "id">;

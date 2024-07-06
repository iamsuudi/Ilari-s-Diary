export type weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type visibility = "great" | "good" | "ok" | "poor";

export interface DiaryType {
	id: number;
	date: string;
	weather: weather;
	visibility: visibility;
	comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryType, "comment">;

export type DiaryEntry = Omit<DiaryType, "id">;

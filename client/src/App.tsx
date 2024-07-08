import { useEffect, useState } from "react";
import { DiaryType } from "./types";
import { getDiaries } from "./service";

function App() {
	const [diaries, setDiaries] = useState<DiaryType[]>([]);

	useEffect(() => {
		getDiaries()
			.then((data) => {
				setDiaries(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	return (
		<div className="flex flex-col p-10">
			<div className="flex flex-col">
				<p className="font-bold text-xl">Add new diary</p>
				<form action="" className="flex flex-col gap-5">
					<label className="flex gap-5 items-center">
						Date:
						<input
							type="date"
							name="date"
							className="p-1 bg-black/20 rounded outline-none"
						/>
					</label>
					<label className="flex gap-5 items-center">
						Visivility:
						<select
							name="visibility"
							className="p-1 bg-black/20 rounded outline-none">
							<option value="greate">greate</option>
							<option value="good">good</option>
							<option value="ok">ok</option>
							<option value="bad">bad</option>
						</select>
					</label>
					<label className="flex gap-5 items-center">
						Weather:
						<select
							name="weather"
							className="p-1 bg-black/20 rounded outline-none">
							<option value="sunny">sunny</option>
							<option value="rainy">rainy</option>
							<option value="windy">windy</option>
							<option value="cloudy">cloudy</option>
							<option value="stormy">stormy</option>
						</select>
					</label>
					<label className="flex gap-5 items-center">
						Comment:
						<textarea
							name="comment"
							cols={30}
							rows={4}
							className="p-1 bg-black/20 rounded outline-none"
						/>
					</label>
				</form>
			</div>

			<hr className="my-10 stroke-black" />

			<div className="flex flex-col gap-5">
				<p className="font-bold text-xl">Diaries</p>
				<div className="flex flex-col gap-5">
					{diaries.length > 0 &&
						diaries.map((diary) => {
							return (
								<div key={diary.id} className="bg-black/5">
									<p className="font-bold text-blue-700">
										Weather:{" "}
										<span className="font-bold text-green-600">
											{diary.weather}
										</span>
									</p>
									<p className="font-bold text-blue-700">
										Visibility:{" "}
										<span className="font-bold text-green-600">
											{diary.visibility}
										</span>
									</p>
									<p className="font-bold text-blue-700">
										Date:{" "}
										<span className="font-bold text-green-600">
											{diary.date}
										</span>
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;

import React from "react";
import avaNote from "../assets/projects/avaNote.png";
import covid19 from "../assets/projects/covid19.png";
import fitMate from "../assets/projects/fitMate.png";
import mealMaster from "../assets/projects/mealMaster.png";

export default function Projects() {
	return (
		<div className="bg-bg-grey p-6">
			<h2 className="text-xl ">Projects</h2>
			<div>
				<img src={fitMate} alt="fitMate" className="rounded-lg my-6" />
				<p>
					Fit Mate.AI is a web app that creates personalized workout plans based
					on users health info, preferences, and fitness goals, using ChatGPT to
					deliver tailored routines for each individual.
				</p>
				<div>
					<a href="https://github.com/avachoi/fit_mate">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
					<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">video</a>
				</div>
			</div>
			<div>
				<img src={avaNote} alt="avaNote" className="rounded-lg my-6" />
				<p>
					Ava Note is a digital notebook app that lets users create, edit, and
					organize notes across multiple notebooks. It supports adding,
					deleting, and categorizing notes. Notes are saved in local storage to
					maintain data across sessions.
				</p>
				<div>
					<a href="https://github.com/avachoi/ava_note">github</a>
					<a href="https://ava-note.onrender.com">live</a>
				</div>
			</div>
			<div>
				<img src={mealMaster} alt="mealMaster" className="rounded-lg my-6" />
				<p>
					Meal Master is a web application that allows users to search and view
					recipes from various categories. It uses the MealDB API to fetch meal
					details, including images, instructions, and YouTube videos for
					preparation.
				</p>
				<div>
					<a href="https://github.com/avachoi/meal_master">github</a>
				</div>
			</div>
			<div>
				<img src={covid19} alt="covid19" className="rounded-lg my-6" />
				<p>
					Users can see COVID-19 cases in NYC by zip code. The user can switch
					between seeing the data in a table or a choropleth map.
				</p>
				<div>
					<a href="https://github.com/avachoi/cov19_nyc">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
				</div>
			</div>
		</div>
	);
}

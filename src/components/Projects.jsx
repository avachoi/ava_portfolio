import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import avaNote from "../assets/projects/avaNote.png";
import covid19 from "../assets/projects/covid19.png";
import fitMate from "../assets/projects/fitMate.png";
import mealMaster from "../assets/projects/mealMaster.png";
import gitOrange from "../assets/icons/gitOrange.png";
import gitPink from "../assets/icons/gitPink.png";
import live from "../assets/icons/live.png";
import video from "../assets/icons/video.png";

export default function Projects() {
	return (
		<div className="bg-bg-grey p-6 pt-14 text-white " id="projects">
			<h2 className="text-xl ">Projects</h2>
			<div className="flex flex-wrap justify-center">
				<div className="max-w-4xl">
					<img
						src={fitMate}
						alt="fitMate"
						className="rounded-lg my-6 transition duration-300 ease-in-out hover:scale-110"
					/>
					<p>
						Fit Mate.AI is a web app that creates personalized workout plans
						based on users health info, preferences, and fitness goals, using
						ChatGPT to deliver tailored routines for each individual.
					</p>
					<div className="flex justify-center my-4">
						<a href="https://github.com/avachoi/fit_mate">
							<img src={gitPink} alt="github logo" className="w-8" />
						</a>
						<a href="https://fit-mate.onrender.com/" className="mx-4">
							<img src={live} alt="live logo" className="w-8" />
						</a>
						<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">
							<img src={video} alt="youtube logo" className="w-8" />
						</a>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm 
                        font-semibold text-white   hover:text-bg-orange,font-bold"
							>
								Tech
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 animate-bounce"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-4 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 
                        transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 
                        data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="">
								<MenuItem>
									<div
										href="#"
										className="block px-4 py-2 text-sm text-white bg-box-grey"
									>
										<ul>
											<li>HTML, CSS, JavaScript, React</li>
											<li>Node.js, Express, MongoDB</li>
											<li>ChatGPT</li>
										</ul>
									</div>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</div>
				<div className="max-w-4xl">
					<img
						src={avaNote}
						alt="avaNote"
						className="rounded-lg my-6 transition duration-300 ease-in-out hover:scale-110"
					/>
					<p>
						Ava Note is a digital notebook app that lets users create, edit, and
						organize notes across multiple notebooks. It supports adding,
						deleting, and categorizing notes. Notes are saved in local storage
						to maintain data across sessions.
					</p>
					<div className="flex justify-center my-4">
						<a href="https://github.com/avachoi/ava_note">
							<img src={gitPink} alt="github logo" className="w-8" />
						</a>
						<a href="https://ava-note.onrender.com" className="mx-4">
							<img src={live} alt="live logo" className="w-8" />
						</a>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm 
                        font-semibold text-white   hover:text-bg-orange "
							>
								Tech
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 animate-bounce"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-4 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 
                        transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 
                        data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="">
								<MenuItem>
									<div
										href="#"
										className="block px-4 py-2 text-sm text-white bg-box-grey"
									>
										<ul>
											<li>HTML, CSS, JavaScript, React</li>
										</ul>
									</div>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</div>
				<div className="max-w-4xl">
					<img
						src={covid19}
						alt="covid19"
						className="rounded-lg my-6 max-w-xl transition duration-300 ease-in-out hover:scale-110"
					/>
					<p>
						Users can see COVID-19 cases in NYC by zip code. The user can switch
						between seeing the data in a table or a choropleth map.
					</p>
					<div className="flex justify-center my-4">
						<a href="https://github.com/avachoi/cov19_nyc">
							<img src={gitPink} alt="github logo" className="w-8" />
						</a>
						<a href="https://fit-mate.onrender.com/" className="mx-4">
							<img src={live} alt="live logo" className="w-8" />
						</a>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm 
                        font-semibold text-white   hover:text-bg-orange font-bold"
							>
								Tech
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 animate-bounce"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-4 w-40 rounded-md bg-white shadow-lg ring-1 ring-black 
                        ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform 
                        data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="">
								<MenuItem>
									<div
										href="#"
										className="block px-4 py-2 text-sm text-white bg-box-grey"
									>
										<ul>
											<li>HTML, CSS, JavaScript, React, D3.js</li>
											<li>Node.js, Express, Webpack</li>
											<li>Cheerio, Cors</li>
										</ul>
									</div>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</div>
				<div className="max-w-4xl">
					<img
						src={mealMaster}
						alt="mealMaster"
						className="rounded-lg my-6 transition duration-300 ease-in-out hover:scale-110"
					/>
					<p>
						Meal Master is a web application that allows users to search and
						view recipes from various categories. It uses the MealDB API to
						fetch meal details, including images, instructions, and YouTube
						videos for preparation.
					</p>
					<div className="flex justify-center my-4">
						<a href="https://github.com/avachoi/meal_master">
							<img src={gitPink} alt="github logo" className="w-8" />
						</a>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm 
                        font-semibold text-white   hover:text-bg-orange "
							>
								Tech
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 animate-bounce"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-4 w-40 rounded-md bg-white shadow-lg 
                        ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform 
                        data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="">
								<MenuItem>
									<div
										href="#"
										className="block px-4 py-2 text-sm text-white bg-box-grey"
									>
										<ul>
											<li>HTML, CSS, JavaScript, React</li>
										</ul>
									</div>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</div>
			</div>
		</div>
	);
}

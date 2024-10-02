import React, { useState, useEffect } from "react";
import floater from "../assets/floater.png";
import resume from "../assets/resume.pdf";

export default function Welcome() {
	const animationDelay = 2500;
	const words = ["SoftwareEngineer", "Web Developer", "Problem-Solver"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			hideWord(currentWordIndex);
		}, animationDelay);

		return () => clearInterval(interval);
	}, [currentWordIndex]);

	function hideWord(index) {
		const nextWordIndex = takeNext(index);
		setCurrentWordIndex(nextWordIndex);
	}

	function takeNext(index) {
		return index === words.length - 1 ? 0 : index + 1;
	}

	return (
		<div className="h-auto scroll-smooth">
			<span>
				<section
					className="h-screen bg-bg-welcome m-0 flex items-start flex-col justify-center
        text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-52"
				>
					<p className="text-white text-sm md:text-xl lg:text-2xl 2xl:4xl">
						Hi, My name is
					</p>
					<p className="text-pf-orange my-4 text-5xl font-bold md:text-6xl lg:text-150px 2xl:text-8xl">
						Ava Choi
					</p>

					<section className="cd-intro">
						<h1 className="cd-headline rotate-1">
							<span className="text-white text-sm md:text-xl lg:text-2xl 2xl:text-4xl">
								I am a{" "}
							</span>
							<span className="cd-words-wrapper text-white text-2xl md:text-6xl 2xl:text-8xl">
								{words.map((word, index) => (
									<b
										key={index}
										className={
											index === currentWordIndex ? "is-visible" : "is-hidden"
										}
									>
										{word}
									</b>
								))}
							</span>
						</h1>
					</section>
					<a
						className="border-4 border-bg-orange text-white p-2 rounded-lg mt-4 md:mt-12 text-sm md:text-2xl"
						href="#contact"
					>
						Contact Me
					</a>
				</section>
			</span>
			<span>
				<img
					src={floater}
					className="floater invisible xl:visible 2xl:w-1/4 "
				></img>
			</span>
			<ul className="position: absolute flex items-end flex-col top-1/2 right-80 z-10 text-xl font-bold space-y-4 invisible xl:visible 2xl:text-2xl 2xl:top-1/2 2xl:right-96">
				<li>
					<a href="#about" className="block hover:underline">
						About
					</a>
				</li>
				<li>
					<a href="#projects" className="block hover:underline ">
						Projects
					</a>
				</li>
				<li>
					<a
						href={resume}
						target="_blank"
						className="block text-red-300 text-2xl hover:underline 2xl:text-4xl"
					>
						resume
					</a>
				</li>
			</ul>
		</div>
	);
}

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
		<div className="h-auto">
			<span>
				<section
					className="h-screen bg-bg-welcome m-0 flex items-start flex-col justify-center
        text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-52"
				>
					<p className="text-white text-sm md:text-2xl lg:text-4xl">
						Hi, My name is
					</p>
					<p className="text-pf-orange my-4 text-5xl font-bold md:text-8xl lg:text-150px">
						Ava Choi
					</p>

					<section className="cd-intro">
						<h1 className="cd-headline rotate-1">
							<span className="text-white text-2xl md:text-4xl">I am a </span>
							<span className="cd-words-wrapper text-white text-2xl md:text-8xl">
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
				<img src={floater} className="floater invisible 2xl:visible"></img>
			</span>
			<ul className="position: absolute top-1/2 right-96 z-10 text-2xl font-bold space-y-4 invisible 2xl:visible">
				<li>
					<a href="#about" className="block">
						About
					</a>
				</li>
				<li>
					<a href="#projects" className="block">
						Projects
					</a>
				</li>
				<li>
					<a href={resume} target="_blank" className="block ">
						resume
					</a>
				</li>
			</ul>
		</div>
	);
}

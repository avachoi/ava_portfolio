import React, { useState, useEffect } from "react";

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
			<section
				className="h-screen bg-bg-welcome m-0 flex items-start flex-col justify-center
        text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-24"
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
						<span className="cd-words-wrapper text-white text-2xl md:text-6xl">
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
					className="border-2 border-bg-orange text-white p-2 rounded-lg mt-4 md:mt-12 text-sm md:text-2xl"
					href="#contact"
				>
					Contact Me
				</a>
			</section>
		</div>
	);
}

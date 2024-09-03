import React from "react";

export default function Welcome() {
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
				<p className="text-white text-2xl md:text-6xl">
					I am a software Engineer
				</p>
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

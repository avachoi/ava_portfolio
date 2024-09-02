import React from "react";

export default function Welcome() {
	return (
		<div>
			<section className="h-screen bg-bg-welcome m-0 flex items-start flex-col justify-center text-center text-3xl p-12 md:-14 lg:p16 xl:">
				<p className="text-white text-sm">Hi, My name is</p>
				<p className="text-pf-orange text-5xl font-bold">Ava Choi</p>
				<p className="text-white text-2xl">I am a software Engineer</p>
				<a
					className="bg-pf-orange text-white p-2 rounded-lg mt-4 text-lg"
					href="#contact"
				>
					Contact Me
				</a>
			</section>
		</div>
	);
}

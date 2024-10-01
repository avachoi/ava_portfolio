import React from "react";
import email from "../assets/icons/emailW.png";
import github from "../assets/icons/githubW.png";
import linkedin from "../assets/icons/linkedin.png";

export default function Footer() {
	return (
		<div className="bg-bg-welcome py-8">
			<span className="font-serif text-4xl animate-pulse bg-gradient-to-r from-white via-pf-pink to-pf-orange bg-clip-text text-transparent">
				Ava
			</span>
			<div className="linksContents flex justify-center p-4 items-center">
				<a href="https://github.com/avachoi" target="_blank">
					<img src={github} alt="email" className="w-10 m-2" />
				</a>
				<a href="https://www.linkedin.com/in/ava-jeongyeonchoi" target="_blank">
					<img src={linkedin} alt="linkedin" className="w-10 m-2" />
				</a>

				<img src={email} alt="email" className="w-10 m-2" />
			</div>
			<p>Copyright©2024 Ava Choi</p>
		</div>
	);
}

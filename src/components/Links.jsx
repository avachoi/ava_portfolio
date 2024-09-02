import React from "react";
import email from "../assets/icons/emailW.png";
import github from "../assets/icons/githubW.png";
import linkedin from "../assets/icons/linkedin.png";
import resume from "../assets/resume.pdf";

export default function Links() {
	return (
		<div className="bg-bg-orange">
			<div className="linksContents flex justify-center p-4 items-center">
				<img src={github} alt="email" className="w-10 m-2" />
				<img src={linkedin} alt="linkedin" className="w-10 m-2" />
				<img src={email} alt="email" className="w-10 m-2" />
				<a
					href={resume}
					target="_blank"
					className="w-16 m-2 rounded-md border border-white p-1 text-white  font-semibold text-sm"
				>
					resume
				</a>
			</div>
		</div>
	);
}

import React from "react";
import email from "../assets/icons/email.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import resume from "../assets/resume.pdf";

export default function Links() {
	console.log("Resume path:", resume); // Add this line to log the resume path
	return (
		<div>
			<img src={github} alt="email" />
			<img src={linkedin} alt="linkedin" />
			<img src={email} alt="email" />
			<a href={resume} target="_blank">
				resume
			</a>
		</div>
	);
}

import React from "react";
// import { css, html, js, react, tailwind } from "../assets/skills";
import aws from "../assets/skills/aws.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import javascript from "../assets/skills/javascript.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tailwind.png";
import git from "../assets/skills/git.png";
import bootstrap from "../assets/skills/bootstrap.png";
import mongodb from "../assets/skills/mongodb.png";
import photoshop from "../assets/skills/photoshop.png";
import postgre from "../assets/skills/postgre.png";
import typescript from "../assets/skills/typescript.png";
export default function about() {
	return (
		<div className="bg-bg-orange text-white  p-2">
			<div>
				<h1 className="text-2xl">about me</h1>
				<p className="border p-2">
					I am an experienced Software Engineer proficient in JavaScript,
					React.js, Node.js, and more. I have contributed to impactful projects,
					including Cov19NYC, a full-stack web application for tracking COVID-19
					cases. At Outlier, I demonstrated expertise in AI training and
					effective collaboration. As a certified AWS Cloud Practitioner, I
					continuously advance my skills in cloud computing and software
					engineering. Passionate about leveraging technology to solve
					real-world problems, I am always eager to embrace new challenges.
					Let’s connect and explore opportunities to innovate together.
				</p>
				<h1 className="text-2xl">Skills</h1>
				<div>
					<div className="flex flex-row w-full">
						<div>
							<img src={html} alt="html Logo" />
						</div>
						<div>
							<img src={css} alt="css Logo" />
						</div>
						<div>
							<img src={tailwind} alt="tailwind Logo" />
						</div>
						<div>
							<img src={javascript} alt="javascript Logo" />
						</div>
						<div>
							<img src={typescript} alt="typescript Logo" />
						</div>
						<div>
							<img src={react} alt="react Logo" />
						</div>
						<div>
							<img src={bootstrap} alt="bootstrap Logo" />
						</div>
						<div>
							<img src={node} alt="node Logo" />
						</div>
						<div>
							<img src={mongodb} alt="mongodb Logo" />
						</div>
						<div>
							<img src={postgre} alt="postgre Logo" />
						</div>
						<div>
							<img src={aws} alt="AWS Logo" />
						</div>
						<div>
							<img src={git} alt="git Logo" />
						</div>
						<div>
							<img src={photoshop} alt="photoshop Logo" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

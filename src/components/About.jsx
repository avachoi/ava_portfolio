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
		<div className="about bg-bg-orange text-white  p-2 pt-14" id="about">
			<div>
				<h1 className="text-xl">about me</h1>
				<p className="border-2 border-pf-pink p-2 m-6">
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
				<h1 className="text-xl">Skills</h1>
				<div>
					<div className="flex flex-row flex-wrap w-full">
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4 ">
							<img src={html} alt="html Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={css} alt="css Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={tailwind} alt="tailwind Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={javascript} alt="javascript Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={typescript} alt="typescript Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={react} alt="react Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={bootstrap} alt="bootstrap Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={node} alt="node Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={mongodb} alt="mongodb Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={postgre} alt="postgre Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={aws} alt="AWS Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={git} alt="git Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 m-4">
							<img src={photoshop} alt="photoshop Logo" className="p-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

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
		<div
			className="about bg-bg-orange text-white  p-10 pt-14 xl:p-32 flex flex-wrap justify-center"
			id="about"
		>
			<div className="max-w-4xl text-xl ">
				<h1 className="text-xl xl:text-4xl">about me</h1>
				<p className="border-2 border-pf-pink rounded-md bg-box-grey p-4 m-6 text-lg xl:text-2xl xl:leading-relaxed">
					I am an experienced{" "}
					<span className="font-bold text-blue-500">Software Engineer</span>{" "}
					proficient in JavaScript, React.js, Node.js , and more. I have
					contributed to impactful projects, including
					<span className="font-bold text-yellow-400">Cov19NYC</span>, a
					full-stack web application for tracking COVID-19 cases. At{" "}
					<span className="font-bold text-yellow-400">Outlier</span>, I
					demonstrated expertise in AI training and effective collaboration. As
					a certified{" "}
					<span className="font-bold text-pf-pink">AWS Cloud Practitioner</span>
					, I continuously advance my skills in cloud computing and software
					engineering. Passionate about leveraging technology to solve
					real-world problems, I am always eager to embrace{" "}
					<span className="font-bold text-pf-pink">new challenges</span>. Let’s
					connect and explore opportunities to innovate together.
				</p>
			</div>

			<div className="">
				<h1 className="text-xl xl:text-4xl">Skills</h1>
				<div className="">
					<div className="flex flex-row flex-wrap w-full justify-center max-w-2xl">
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={html} alt="html Logo" className="p-2 xl:w-20" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={css} alt="css Logo" className="p-2 xl:w-20" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={tailwind} alt="tailwind Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={javascript} alt="javascript Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={typescript} alt="typescript Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={react} alt="react Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={bootstrap} alt="bootstrap Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={node} alt="node Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={mongodb} alt="mongodb Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={postgre} alt="postgre Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={aws} alt="AWS Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={git} alt="git Logo" className="p-2" />
						</div>
						<div className="bg-gradient-to-b from-slate-100 via-white to-zinc-400 rounded-lg w-14 h-14 xl:w-24 xl:h-24 m-4 xl:m-8">
							<img src={photoshop} alt="photoshop Logo" className="p-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

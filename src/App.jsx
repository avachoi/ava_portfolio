import "./App.css";

import React from "react";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className=" p-0">
			<Nav />
			<div className="">
				<Welcome />
				<About />
				<Projects />
				<Links />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

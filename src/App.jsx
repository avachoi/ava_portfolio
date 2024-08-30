import "./App.css";

import React from "react";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";

export default function App() {
	return (
		<div className=" p-0">
			<Nav />
			<Welcome />
		</div>
	);
}

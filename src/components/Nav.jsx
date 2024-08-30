import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function nav() {
	return (
		<div className="bg-bg-grey flex justify-between p-4">
			<div>logo</div>
			<button>
				<RxHamburgerMenu className="text-white text-xl" />
			</button>
		</div>
	);
}

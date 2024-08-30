import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import About from "./About";

export default function nav() {
	return (
		<div className="bg-bg-grey flex justify-between p-4 fixed w-full">
			<div>logo</div>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<MenuButton className="inline-flex w-fit justify-center gap-x-1.5  text-white text-xl font-bold hover:text-pf-orange">
						<GiHamburgerMenu />
					</MenuButton>
				</div>

				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w- origin-top-right rounded-md bg-bg-grey shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<div className="py-1">
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2  text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							>
								About
							</a>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2  text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							>
								Projects
							</a>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2  text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							>
								Resume
							</a>
						</MenuItem>
					</div>
				</MenuItems>
			</Menu>
		</div>
	);
}

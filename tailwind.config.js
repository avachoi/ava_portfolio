/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"twitter-blue": "#1DA1F2",
				"bg-welcome": "#333232",
				"pf-orange": "#ea4343",
				"bg-orange": "#ba3c3c",
				"bg-grey": "#3d3d3c",
				"box-grey": "#333232",
				"form-grey": "#4e4c4c",
				"pf-pink": "#EE7674",
				"pf-blue": "5290C9",
			},
		},
	},
	plugins: [],
};

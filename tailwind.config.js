/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./libs/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"global-text": "#fffdf0",
				purple: {
					50: "#dfdce6",
					100: "#c1b6de",
					200: "#a18ed1",
					300: "#856dc2",
					400: "#694ead",
					500: "#4f3494",
					600: "#381f78",
					700: "#261259",
					800: "#160838",
					900: "#070214",
				},
				"gradient-purple": "#1c032e",
			},
		},
	},
	plugins: [],
};

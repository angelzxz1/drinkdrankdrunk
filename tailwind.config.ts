/** @type {import('tailwindcss').Config} */

const colors = {
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
	teal:{
        50: "#dcfcf6",
		100: "#b3f5e9",
		200: "#8be8d7",
		300: "#67d6c2",
		400: "#46c2ab",
		500: "#2cab94",
		600: "#188f79",
		700: "#0c705e",
		800: "#044f41",
		900: "#012b24",
        
    },
	orange: "#ffba08",
	"gradient-purple": "#1c032e",
};

const config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./libs/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				center: "0 0 20px #00000055",
			},
			colors,
		},
	},

	plugins: [],
};
module.exports = config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			jura: ['var(--jura-font)', 'sans-serif'],
			sofi: ['var(--sofi-font)', 'sans-serif'],
		},
		extend: {
			colors: {
				first: '#E8F3F7',
				second: '#B8E0EA',
				third: '#D6F0F0',
				dfirst: '#210C31',
				dsecond: '#2f2437',
				dthird: '#0F182F',
				btnclr: '#ef5a10',
				hovbtnclr: '#ff7d53',
			},
		},
	},
	plugins: [],
};

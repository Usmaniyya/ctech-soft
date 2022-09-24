/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#FFCC48',
			secondary: '#9B9B9B',
			'input-color': '#F6F6F6',
			'text-black': '#000',
			'text-white': '#FFFFFF',
			'icon-bg': '#F6F6F6',
			'footer-color': '#9B9B9B',
			'gray-900': 'rgb(17 24 39)',
			'gray-800': 'rgb(31 41 55)',
			'form-input': '#D4D4D4',
			'contact-bg': '#FDFDFD',
		},
		fontSize: {
			'text-base': '1.2rem',
			'4xl': '2.813rem',
			'3xl': '1.75rem',
			'5xl': '2.25rem',
			'2xl': '1.25rem',
			'1xl': '0.938rem',
			'6xl': '2.75rem',
		},

		extend: {
			boxShadow: {
				'3xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				Lato: ['Lato', 'sans-serif'],
			},
			margin: {
				12: '5.5rem',
			},
		},
	},
	plugins: [],
};

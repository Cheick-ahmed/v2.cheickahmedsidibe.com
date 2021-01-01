module.exports = {
	purge: [ './components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik','sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
	require('@tailwindcss/forms'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/aspect-ratio')
	],
}

const colors = require('tailwindcss/colors')

module.exports = {
	purge: [ './components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue'],
	darkMode: 'media', // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik','sans-serif'],
			},
			colors: {
				teal: colors.teal,
				cyan: colors.cyan,
				base: {
					green: '#64ffda',
					gray: '#8892b0',
					'light-gray': '#a8b2d1',
					'lightest-gray': '#ccd6f6',
					'transparent-gray': '#3f3f44'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						h3: {
							color: '#64ffda',
						},
						strong: {
							color: '#64ffda'
						}
					},
				},
			}
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

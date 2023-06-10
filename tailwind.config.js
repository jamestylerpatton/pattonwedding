/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// theme 1
				green: '#A3B3A7',
				'dark-green': '#727D79',

				// theme 2
				beige: '#FDF7F2',
				brown: '#AB6C49',
				black: '#322A27',

				background: '#FDF7F2',
				text: '#AB6C49'
			},
			fontFamily: {
				body: ['"UltraSystemSans"', 'sans-serif'],
				sans: ['"UltraSystemSans"', 'sans-serif'],
				serif: ['"LaLuxesSerif"', 'serif'],
				script: ['"LaLuxesScript"', 'serif']
			}
		}
	},
	plugins: []
};

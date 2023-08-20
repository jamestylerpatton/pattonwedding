/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// theme 1
				green: '#A3B3A7',
				darkgreen: '#727D79',

				// theme 2
				beige: '#FDF7F2',
				brown: '#AB6C49',
				darkbrown: '#675145',
				black: '#322A27',
				olive: '#8D8D6A',

				background: '#FDF7F2',
				text: '#AB6C49',

				successGreen: '#05A660',
				errorRed: '#E53535'
			},
			fontFamily: {
				body: ['"GTAmericaExpanded"', 'sans-serif'],
				sans: ['"GTAmericaExpanded"', 'sans-serif'],
				// body: ['"UltraSystemSans"', 'sans-serif'],
				// sans: ['"UltraSystemSans"', 'sans-serif'],
				serif: ['"LaLuxesSerif"', 'serif'],
				script: ['"LaLuxesScript"', 'serif']
			}
		}
	},
	plugins: []
};

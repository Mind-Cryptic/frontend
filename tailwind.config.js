/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  	extend: {
  		colors: {
  			main: 'var(--main-color--)',
  			black: 'var(--black-color--)',
  			white: 'var(--white-color--)',
  			circuitLine: 'var(--circuit-line-color--)'
  		},
  		fontFamily: {
  			system: 'var(--system-font--)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate]
}

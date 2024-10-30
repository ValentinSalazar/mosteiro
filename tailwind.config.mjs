/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '360px', // Celulares pantalla muy chica
			'sm': '400px', // Celulares
			'md': '768px', // Celulares Horizontal y Tablet Vertical
			'lg': '1024px', // Tablet Horizontal y Laptops
			'xl': '1280px', // Laptops y escritorios chicos
			'2xl': '1536px', // Escritorios grandes
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				'firstColor': '#151515',
				'secondColor': '#EADFCA',
			},
			boxShadow: {
				'leftShadow': '-6px 0px 8px rgba(0, 0, 0, 0.3)',
			},
			backgroundImage: {
				'mainImage': "url('/home.webp')",
				'cocinaImage': "url('/cocinaBkg.webp')",
				'proceso-1': 'url("/proceso-1.png")',
				'proceso-2': 'url("/proceso-2.png")',
				'garantia': 'url("/imageGarantia.webp")',
				'nosotrosLeft': 'url("/nosotros-left.webp")',
				'nosotrosRight': 'url("/nosotros-right.webp")',
			}
		},
	},
	plugins: [],
}

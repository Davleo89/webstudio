/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2196F3',
        'secondary': '#212121',
        'accent': '#757575',
        'background': '#2F303A',
        'text': '#1169b1ff',
      },
      fontFamily: {
        // Renombra las fuentes a tu gusto
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [],
};
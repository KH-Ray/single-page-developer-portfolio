/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#151515",
        "primary-green": "#4ee1a0",
        "dark-gray": "#242424",
        "light-gray": "#d9d9d9",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

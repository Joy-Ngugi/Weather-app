import rippleui from 'rippleui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rippleui/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [rippleui],
};

export default config;
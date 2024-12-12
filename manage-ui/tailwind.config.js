/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-800": "hsl(228, 39%, 23%)",
        "primary-900": "hsl(233, 12%, 13%)",
        "primary-400": "hsl(227, 12%, 61%)",
        "accent-900": "hsl(12, 88%, 59%)",
        "accent-200": "hsl(13, 100%, 96%)",
        "accent-100": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"Figtree"', 'sans-serif'],
        'figtree': ['"Figtree"', 'sans-serif']
      },
      colors: {
        "MAINGREY": "rgba(194, 195, 196, 1)",
        "PLACEHOLDER": "rgba(122, 125, 128, 1)",
        "SUBTEXT": "rgba(57, 61, 65, 1)",
        "LINKCOLOR": "rgba(0, 112, 243, 1)",
        "MAIN": "rgba(84, 159, 247, 1)"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     "fontFamily": {
        "Onest": "Onest, sans-serif;"
      },
      "colors":{
        "primary": "#F26922",
        "secondary":"#71717A",
        "other": "#09090B",
      },
      
    },
  },
  plugins: [],
}


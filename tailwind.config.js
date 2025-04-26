/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header': "url('./src/assets/cater-bg.jpg')"
      },
      colors: {
        'primary': "#151944",
        "secondary": "#ed8a5d",
        "secondary-dark": '#ba6c48',
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "parchment": "#F8F5DF",
        "white": "#FCFCF7"
      },
      fontFamily: {   
        'logo' :['logo', 'sans-serif'],
        'cormorant': ['Cormorant Upright', 'sans-serif'],
        'alt': ['Open Sans']
      }
    },
  },
  plugins: [],
}


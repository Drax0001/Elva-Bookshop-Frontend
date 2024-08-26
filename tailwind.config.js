/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
    },
    colors:{
      primaryColor: '#eaece5',
      secondaryColor: '#b2c2bf',
      tertiaryColor: '#c0ded9',
      neutral: '#3b3a30',
    },
    fontFamily: {
      heading: ['Impact', 'Helvetica Neue'],
      text: ['Trebuchet MS', 'sans-serif']
    },
    // backgroundImage: {
    //   library: 'url('')'
    // }
  },
  plugins: [],
}


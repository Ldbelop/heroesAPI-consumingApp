/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*jsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors:{
        blackbg: "#0D0D0D",
        whiteTxt: "#e7e7e7",
        greyishbg: "#282828",
        redbg: "#8C1207",
        cardbg: "#FEFFFF",
        marvelred: "#70140C",
        dcblue: "#0e3957"
      }
    },
  },
  plugins: [],
}

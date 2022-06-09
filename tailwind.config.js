module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/1.webp')",
      },
      fontSize: {
        sm: ['14px'],
      },
      colors: {
        starGreen: "#D4E9E2",
        textGreen: "#1e3932",
        greenHover: "rgba(30,57,50,.1)",
        whiteHover: "rgba(255, 255, 255, 0.12)",
        grayText: "rgba(0,0,0,.58)",
        grayHover: "rgba(0, 0, 0, 0.87)",
        darkPink: "#F06464",
        lightPink: "#FA91AA",
        overlay: "rgba(0, 0, 0, 0.5)",
        joinNow: "rgba(0,0,0,.7)",
        signIn: "rgba(0, 0, 0, 0.09)",
        
      },
    },
  },
  plugins: [],
}

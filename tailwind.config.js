const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/*.html"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Lora", "serif"],
      display: ["Sacramento", "cursive"],
    },
    extend: {},
    colors: {
      white: "#FFFFFF",
      primary: "#357EFC",
      secondary: "#505050",
      background: "#EEEEEE",
      gray: "#9f9f9f",
      sky: "#F5F8EB",
    },
  },
  variants: {},
  plugins: [],
};

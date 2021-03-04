module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mygreen: "#16c79a",
        myblue: "#19456b",
        mylightblue: "#11698e",
        mywhite: "#f8f1f1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

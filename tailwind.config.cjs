/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#001d3d",
        "gray-text": "#ecedf8",
        "purple-soc": "#5271FF",
        "light-blue": "#61DBFB",
        "yellow-soc": "#fec601",

        "gray-20": "#001A2C", //page's background-color
        "gray-100": "#DFCCCC",
        "gray-500": "#576AEC", //default page's text color

        "primary-100": "#012a4a", //mobile menu toggled color and Navbar
        "primary-300": "#2bd9fe", //hover color
        "primary-500": "#0197f6", // "Home" link color + button hover color
        "secondary-500": "#11b5e4", //button color
      },
      backgroundImage: (theme) => ({
        "home-image": "url(../../src/assets/socVitrine3.jpg)",
        // "mobile-home": "url('./assets/socLogoNew.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        cybertext: "url('./assets/cybertext.png')",
        communityText: "url('./assets/communityTextR.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

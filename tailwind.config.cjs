/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "gray-20": "#F8F4EB",
        "deep-blue": "#001d3d",
        // "deep-blue": "#010026",
        "gray-text": "#ecedf8",
        "purple-soc": "#5271FF",
        "light-blue": "#61DBFB",
        "yellow-soc": "#fec601",

        "gray-20": "#001A2C", //page's background-color
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#576AEC", //default page's text color

        // "gray-500 or primary-100": "#004385",
        // "gray-500": "#3395FF",
        // "primary-100": "#001d3d",
        "primary-100": "#012a4a", //mobile menu toggled color and Navbar
        "primary-300": "#2bd9fe", //hover color
        "primary-500": "#0197f6", // "Home" link color + button hover color
        "secondary-400": "#FFCD58",
        "secondary-500": "#11b5e4", //button color
      },
      backgroundImage: (theme) => ({
        "home-image": "url(../../src/assets/socVitrine3.jpg)",
        "gradient-blueyellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "gradient-yellowred":
          "linear-gradient(90deg, #FC9572 0%, #AD43E7 50%, #E2D45C 100%)",
        "gradient-bluegreen":
          "linear-gradient(90deg, #00171F 0%, #003459 50%, #007EA7 100%)",
        "mobile-home": "url('./assets/socLogoNew.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        cybertext: "url('./assets/cybertext.png')",
        communityText: "url('./assets/communityTextR.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
        // connection: "url(./assets/Connection.png)",
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

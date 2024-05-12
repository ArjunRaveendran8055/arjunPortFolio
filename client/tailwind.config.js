/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    colors: {
      darkblue: "#001861",
      black: "#000000",
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      darkpink: "#FF1493",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      navyblue: "#000080",
      fluegreen: "#00FF15",
      specialgray: "#B4D9EF",
      cyan500: "#00BCD4",
      darkpurple: "#301934",
      violet: "#5800e3",
      difblue:"#219ebc",

      //additional for footer

      "neutral-white": "#fff",
      "dark": "#263238",
      "text-gray-300": "#d9dbe1",
      "neutral-silver": "#f5f7fa",
      "brand-primary": "#4caf4f",
      'clr_green':'#C9F55F',
      black: "#000",
      "level-1": "#181823",
      white: "#fff",
      "light-grey": "#8491a0",
      purple: "#5221e6",
      blueviolet: {
        "100": "#7847ff",
        "200": "rgba(120, 71, 255, 0.09)",
      },
      "dark-grey": "#5b6876",
      violet: "#fbe4ff",
      peach: "#fff3e4",
      palevioletred: "#e95d90",
      cornflowerblue: "#609bff",
      limegreen: "#3cc74e",
      gray: {
        "100": "rgba(255, 255, 255, 0.7)",
        "200": "rgba(255, 255, 255, 0.5)",
      },

    },

    fontFamily: {
      "paragraph-16": "Sen",
      'sans': ['Roboto', 'sans-serif'],
      'krona':["Krona One", 'sans-serif'],
      Playfiar: ["Playfair"],
      enriq: ["Enriqueta"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      scale: {
        125: "1.25",
        175: "1.75",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};

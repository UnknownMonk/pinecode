/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { backgroundColor: "rgba(255, 255, 255, 1)" },
          "100%": {
            backgroundColor: "rgba(255, 255, 255, 0)",
            display: "none",
          },
        },
        wobble: {
          from: {
            transform: "translateY(-300%)",
          },

          "15%": {
            transform: "translateY(-250%) ",
          },

          "30%": {
            transform: "translateY(-200%) ",
          },

          "45%": {
            transform: "translateY(-150%, 0, 0) ",
          },

          "60%": {
            transform: "translateY(-100%) ",
          },

          "75%": {
            transform: "translate3d(-50%) ",
          },

          to: {
            transform: "translateY(10%)",
          },
        },
      },
      backgroundImage: {
        forest: "url('/forest.svg')",
        footerStump: "url('/stumpfloor.png')",
        floridaPostCard: "url('/FloridaPostCard.svg')",
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        wobble: "wobble 1.1s ease-in",
        fade: "fadeOut 5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

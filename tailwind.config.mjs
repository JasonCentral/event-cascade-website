const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: {
        DEFAULT: "rgb(var(--color-background) / <alpha-value>)",
        light: "rgb(var(--color-background-light) / <alpha-value>)",
        highlight: "rgb(var(--color-highlight) / <alpha-value>)",
      },
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
      border: "rgb(var(--color-border) / <alpha-value>)",
    },
    boxShadow: {
      inset: "inset 0px 0px 80px 0px theme(colors.background.highlight)",
    },
    screens: {
      "2sm": "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        section: "var(--section-spacing)",
      },
      textShadow: {
        sm: "0 1px 10px var(--tw-shadow-color)",
        DEFAULT: "0 2px 10px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};

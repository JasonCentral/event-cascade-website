/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: {
        DEFAULT: "rgb(var(--color-background) / <alpha-value>)",
        light: "rgb(var(--color-background-light) / <alpha-value>)",
      },
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
    },
  },
  plugins: [],
};

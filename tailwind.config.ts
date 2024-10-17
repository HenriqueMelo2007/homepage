import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        divH: "500px"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        seaweed: ['var(--font-seaweed-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;

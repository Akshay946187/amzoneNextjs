import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      'dull-white':'#FFFFFFB3',
      'light-white':'#FFFFFFB3',
      'medium-white':'#FFFFFF40',
      'black-dark':'#00000050',
      'neon-blue':'#2FB8FF'


    }
    },
  },
  plugins: [],
};
export default config;

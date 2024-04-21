const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': '#00337C',
        'custom-white': '#fef9f9',
        'custom-ligthblue': '#50aabf',
        'custom-green': '#1ed09a',
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to:{transform: "translateX(-100%)"}
        },
      }
    },
  },

};

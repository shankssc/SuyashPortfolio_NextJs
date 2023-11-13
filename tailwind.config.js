/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme"

module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
    
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        skillPrimary: '#fcd0f1',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      },
      clipPath: {
        stamp: 'polygon(0% 16%, 16% 0%, 84% 0%, 100% 16%, 100% 84%, 84% 100%, 16% 100%, 0% 84%)',
      },
      maskImage: {
        'clip-stamp': 'linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgb(0,0,0,0.4), 3px, #f5f5f5 5px, #f5f5f5 80px);',
        circularDark: 'repeating-radial-gradient(rgb(255,255,255,0.4), 3px, #1b1b1b 8px, #1b1b1b 80px);',
      },
      backgroundSize: {
        'circular': '100% 100%', // Set the background size to 100% width and 100% height
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
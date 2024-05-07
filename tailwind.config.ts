import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#00ff00",
                   
          "secondary": "#0000ff",
                   
          "accent": "#00ff00",
                   
          "neutral": "#ff00ff",
                   
          "base-100": "#ff00ff",
                   
          "info": "#0000ff",
                   
          "success": "#00ff00",
                   
          "warning": "#00ff00",
                   
          "error": "#ffff00",
                   
        },
      }
    ]
  }
};
export default config;

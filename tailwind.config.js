/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      backgroundColor:{
        'regal-blue': '#243c5a',
      },
      colors: {
        skyBlue: '#b1cfeb',
        navyBlue: '#003049',
      },
      height: {
        '128': '45%',
      },
      scale: {
        '175': '1.1',
      }
    },
  },
  plugins: [],
};

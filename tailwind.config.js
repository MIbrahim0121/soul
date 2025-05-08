/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade 2s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      // fontFamily: {
      //   sans: ['Montserrat', 'sans-serif'],
      //   cormorant: ['"Cormorant Garamond"', 'serif'],
      //   worksans: ['"Work Sans"', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
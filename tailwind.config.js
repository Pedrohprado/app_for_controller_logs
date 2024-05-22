/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        animationleft: 'animationleft 0.5s forwards',
        animationup: 'animationup 0.3s forwards',
        fadeOut: 'fadeOut 1s ease-out',
      },
      keyframes: {
        animationleft: {
          to: { opacity: 1, transform: 'initial' },
        },
        animationup: {
          to: { opacity: 1, transform: 'initial' },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { keyframes: {
      move: {
        '0%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(-90px)' },
      },
      right: {
        '0%': { transform: 'translateX(-200px)' },
        '100%': { transform: 'translateX(0px)' },
      },
    },
    animation: {
      'Move-on': 'move 0.9s linear 1 forwards',
      'Move-Right': 'right 0.9s linear 1 forwards',
    },
  },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1280px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '978px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '674px'},
      'ssm': {'max': '618px'},

      'xm':{'max':'540px'},
      // => @media (max-width: 639px) { ... }
      'xxm':{'max':'370px'},
      'xxxm':{'max':'330px'},
      'XM':{'max':'260px'},
    },
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/images/main-cover-2.jpg')",
      }),

      backgroundColor: (theme) => ({
        ...theme('colors'),
        almostWhite: '#fafafa',
      }),

      height: {
        xl: '800px',
        sm: '150px',
      },
      width: {
        md: '900px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

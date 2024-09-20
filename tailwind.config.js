/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundColor: {},
      height: {
        heightLessNav: 'h-[calc(100vh-64px)]',
      },
        fontSize: {
          calc: 'calc(8px + 0.3125vw)',
        },
      screens: {
        desktop: '840px',
        smphoneMax: { max: '320px' },
        bigphoneMax: { max: '500px' },
        smMax: { max: '640px' },
        mdMax: { max: '768px' },
        lgMax: { max: '1024px' },
      },
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        'text-color': '#000000',
        'main-color': '#302b2b',
        'primary-bg': '#fafafa',
        'purple': '#836fda',
        'label': '#9ca3af',
        'white': '#fff',
        'cyan-dark-color': '#015b7d',
        'straw-color': '#f3d2a7',
        'aqua-green': '#049688',
        'gray-color': '#6d6d6d',
        'light-gray-color': '#d2d2d2',
        'secondary-bg': '#e9e9e9',
        'whatsapp-color': '#00bf63',
      },
    },
  },
  plugins: [],
}


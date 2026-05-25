/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
       keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 8s linear infinite',
      },
      fontFamily: {
        SFLight: ["SF-Light", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
        SFThin: ["SF-Thin", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('./src/assets/backgrounds/hero.png')",
        'eventSphereHero': "url('./src/assets/images/EventSphere.png')",
        'pearlHero': "url('./src/assets/images/Pearl_Printers.png')",
        'riteSliceHero': "url('./src/assets/images/RiteSlice.png')",
      },
    },
  },
  plugins: [
  ],
}
import colors from 'tailwindcss/colors';

const mono = 'IBM Plex Mono';
const sans = 'IBM Plex Sans';
const condensed = 'IBM Plex Sans Condensed';
const serif = 'IBM Plex Serif';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: [mono, 'monospace'],
        sans: [sans, 'sans-serif'],
        condensed: [condensed, 'sans-serif'],
        serif: [serif, 'serif'],
      },

      colors: {
        primary: colors.blue,
        secondary: colors.teal,
        neutral: colors.stone,
        success: colors.green,
        warning: colors.orange,
        danger: colors.red,
      },

      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },

      keyframes: {
        highlight: {
          from: { backgroundColor: colors.blue[300] },
          to: {},
        },

        contradiction: {
          from: { backgroundColor: colors.red[300] },
          to: {},
        },

        blink: {
          'from, to': { opacity: 1 },
          '50%': { opacity: 0 },
        },

        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-3px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(3px, 0, 0)' },
        },

        rise: {
          from: { opacity: 0, bottom: '0px' },
          '20%': { opacity: 1 },
          '60%': { opacity: 1, bottom: '15px' },
          to: { opacity: 0, bottom: '15px' },
        },

        celebrate: {
          '50%': { opacity: 1, transform: 'scale(1.5) rotate(3deg)' },
        },

        float: {
          from: { opacity: 0, bottom: '8px' },
          '50%': { opacity: 1 },
          '60%': { opacity: 1 },
          to: { opacity: 0, bottom: '23px' },
        },
      },

      animation: {
        highlight: '500ms highlight ease-out',
        contradiction: '1500ms contradiction ease-out',
        blink: '1s blink step-end infinite',
        rise: '2s rise ease-out',
        celebrate: '1s celebrate ease-in-out',
        shake: '500ms shake',
      },
    },
  },
  plugins: [],
};

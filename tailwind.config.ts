import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-bg': 'url(../public/Header/header-bg.png)',
        'booking-form-bg': 'url(../public/BookingForm/book-bg.png)',
      },
      colors: {
        primary: {
          light: '#ffeae6',
          DEFAULT: '#ff4d30',
          dark: '#fa4226',
          darkest: '#e9381d',
        },
        secondary: {
          lightest: '#efe9e9',
          light: '#e9e9e9',
          DEFAULT: '#706f7b',
          dark: '#fa4226',
        },
        blackish: {
          light: '#777',
          DEFAULT: '#010103',
          dark: '#fa4226',
        },
        formInput: {
          light: '#67e8f9',
          DEFAULT: '#ababab',
          dark: '#fa4226',
        },
        error: {
          text: '#721c24',
          background: '#f8d7da',
        },
        success: {
          text: '#2a6817',
          background: '#c3fabe',
        },
      },
      screens: {
        xs: '450px',
        med: '800px',
        medPlus: '850px',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '481px',
      laptop: '769px',
      desktop: '1025px',
      monitor: '1201px',
      bigmonitor: '1441px',
    },
    colors: {
      haikei: {
        yuzu: '#f8f9c7',
        miyabi: '#e4d0f6',
        kumo: '#d3f3f1',
      },
      success: {
        DEFAULT: '#8EFF1D',
        100: '#C1FF83',
        200: '#B7FF6E',
        300: '#A2FF45',
        400: '#8EFF1D',
        500: '#79F300',
        600: '#65CA00',
        700: '#499200',
      },
      warning: {
        DEFAULT: '#FE6D73',
        100: '#FFE7E8',
        200: '#FFBEC1',
        300: '#FE969A',
        400: '#FE6D73',
        500: '#FE353E',
        600: '#F9020C',
        700: '#C10109',
      },
      info: {
        DEFAULT: '#1F51FF',
        100: '#5C7FFF',
        200: '#476FFF',
        300: '#335FFF',
        400: '#1F51FF',
        500: '#0A3FFF',
        600: '#0035F5',
        700: '#0031E0',
      },
      neutral: {
        DEFAULT: '#1C1C1C',
        100: '#FFFFFF',
        200: '#F2F2F2',
        300: '#B5B5B5',
        400: '#787878',
        500: '#3B3B3B',
        600: '#1C1C1C',
        700: '#000000',
      },
    },
    backgroundSize: {
      favicon: '16px 16px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'Ripe-Limon': '#f6c80e',
        'Web-Orange': '#f5a700',
        Flamingo: '#f26321',
        'Cafe-Royale': '#7d4a0c',
        Cedar: '#3e2314',
      },
    },
  },
  plugins: [],
};

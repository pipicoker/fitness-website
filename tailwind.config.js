/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        "hero-bg": "url(../public/hero-bg-img.png)"
      }
    },
  },
  plugins: [],
}


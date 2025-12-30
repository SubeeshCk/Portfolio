/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "antigravity-dark": "#0a0a0a", // Deepest black
        "antigravity-charcoal": "#121212", // Slightly lighter for cards
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.05)",
        "neon-pink": "#f92672",
        "neon-blue": "#66d9ef",
        "neon-green": "#a6e22e",
        "neon-purple": "#ae81ff",
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Developer vibe
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

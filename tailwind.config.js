/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06080B',
          900: '#0B0F15',
          850: '#10151E',
          800: '#161D2A',
          700: '#232D40',
          600: '#334155',
        },
        titanium: {
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
        },
        hydro: {
          cyan: '#00E5FF',
          blue: '#0284C7',
          glow: '#38BDF8',
          deep: '#0369A1'
        },
        mineral: {
          amber: '#F59E0B',
          gold: '#EAB308',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 229, 255, 0.25)',
        'glow-cyan-lg': '0 0 60px -10px rgba(0, 229, 255, 0.4)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE600',
          orange: '#FF5722',
          coral: '#FF6B6B',
          cyan: '#00E5FF',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          pink: '#EC4899',
          mint: '#10B981',
          lime: '#84CC16',
          dark: '#1E1E2F',
        },
      },
      boxShadow: {
        'pop-sm': '2px 2px 0px 0px #0f172a',
        'pop': '4px 4px 0px 0px #0f172a',
        'pop-lg': '6px 6px 0px 0px #0f172a',
        'pop-xl': '8px 8px 0px 0px #0f172a',
        'pop-hover': '1px 1px 0px 0px #0f172a',
        'pop-primary': '4px 4px 0px 0px #0284c7',
        'pop-coral': '4px 4px 0px 0px #e11d48',
        'pop-amber': '4px 4px 0px 0px #d97706',
        'pop-purple': '4px 4px 0px 0px #7c3aed',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

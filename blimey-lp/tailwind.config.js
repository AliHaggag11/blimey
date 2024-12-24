/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slow-zoom": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.1)',
            opacity: 0.8,
          }
        },
        "text-shimmer": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        'float': 'float 5s ease-in-out infinite',
        "text-shimmer": "text-shimmer 8s ease-in-out infinite",
      },
      dropShadow: {
        'md': '0 4px 3px rgba(0, 0, 0, 0.3)',
        'lg': '0 4px 6px rgba(0, 0, 0, 0.4)',
        '2xl': '0 4px 12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}


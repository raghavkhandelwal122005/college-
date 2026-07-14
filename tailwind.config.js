/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0f1521",
          900: "#141b2b",
          800: "#1a2338",
          700: "#232e48",
          600: "#334063",
        },
        teal: {
          500: "#14a89a",
          600: "#0d9488",
          700: "#0b7c72",
        },
        amber: {
          500: "#f0a83c",
        },
        canvas: "#eef1f5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 21, 33, 0.06), 0 1px 1px rgba(15, 21, 33, 0.04)",
      },
    },
  },
  plugins: [],
}


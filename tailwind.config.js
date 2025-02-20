/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      colors: {
        primary: "#0B2C3D", // Deep Navy Blue
        secondary: "#EBE2E0", // Light Beige
        accent: "#990302", // Deep Red
      },
    },
  },
  plugins: [],
};

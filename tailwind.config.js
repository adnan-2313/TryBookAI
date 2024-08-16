/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg,#1e0533, #110a1f)",
        "custom-light-gradient":
          "linear-gradient(45deg,rgba(67,22,105,0.05), rgba(17, 10, 31,0.05))",
        "bg-gradient": "linear-gradient(45deg,#726bff, #57b6fe)",
        "bg-gradient2": "linear-gradient(45deg,#8a2be2,#4b0082)",
        "text-gradient": "linear-gradient(45deg,#8a2be2, #4b0082)",
      },
    },
  },
  plugins: [],
};

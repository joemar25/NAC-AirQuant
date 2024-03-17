/** @type {import('tailwindcss').Config} */

export default {
  content: ["./application/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
};

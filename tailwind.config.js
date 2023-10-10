/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      postShadow: "0 2px 8px 0px rgba(0, 0, 0, 0.06)",
    },
    extend: {
      backgroundImage: {
        checkedTrueHoverFalse: "url('./src/assets/checkTrueHoverFalse.svg')",
        checkedTrueHoverTrue: "url('./src/assets/checkTrueHoverTrue.svg')",
        redTrashLogo: "url('./src/assets/redTrashLogo.svg')",
        trashLogo: "url('./src/assets/trash.svg')",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        customGridCol2: "auto 1fr",
      },
      gridTemplateRows: {
        customRows2: "repeat(2, auto)",
        customRows2b: "auto 1fr",
        customRows4: "repeat(4, 50px)",
      },
      backgroundImage: {
        progressbarBg:
          "url('/src/assets/images/background/bg-sidebar-desktop.svg')",
        progressbarBgMobile:
          "url('/src/assets/images/background/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}

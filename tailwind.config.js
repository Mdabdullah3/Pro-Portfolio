module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        night: {
          primary: "#ff3465",
          secondary: "#141618",
          neutral: "#F3F4F6",
          "base-100": "#141618",
          info: "#111827",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
      {
        light: {
          primary: "#ff3465",
          secondary: "#141618",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#ECF0F3",
          success: "#521647",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

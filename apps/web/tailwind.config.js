module.exports = {
  content: ["../../packages/ui/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

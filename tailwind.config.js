const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: 'media',
  plugins: [],
};
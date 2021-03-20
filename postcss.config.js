const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("@tailwindcss/jit")({ configOrPath: 'tailwind.config.js' }),
    require("postcss-import"),
    ...(production
      ? [require("autoprefixer"), require("cssnano")({ preset: "default" })]
      : []),
  ],
};
// postcss.config.cjs
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction ? { cssnano: { preset: 'default' } } : {}),
  },
};
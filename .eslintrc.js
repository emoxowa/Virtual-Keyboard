module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['\\.scss$'],
      },
    ],
  },
};

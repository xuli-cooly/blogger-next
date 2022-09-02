module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser', // Vue项目作为可选
  plugins: ['import', 'prettier', 'react', 'react-hooks'], // Vue项目作为可选
  rules: {}
}

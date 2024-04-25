module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'cypress/globals': true, // Cypress 전역 변수 추가
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:cypress/recommended', // Cypress 권장 설정 추가
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    'cypress', // Cypress 플러그인 추가
  ],
};

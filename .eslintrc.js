module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectsRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'max-len': ['error', { code: 80 }],
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': 'always-multiline',
    quotes: ['error', 'single'],
    ignoreTrailingComments: true,
  },
};

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:compat/recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: [
    'compat',
    'flowtype',
    'prettier'
  ],
  overrides: [
    Object.assign(
      {
        files: ['**/*.test.js', '**/*.spec.js'],
        env: { jest: true }
      }
    )
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }]
  }
}

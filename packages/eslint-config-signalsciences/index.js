const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  plugins: [
    'flowtype',
    'jest',
    'react',
  ],
  rules: {
    'flowtype/require-valid-file-annotation': [
      'error',
      'always', {
        annotationStyle: 'block',
      },
    ],
    semi: ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'space-before-function-paren': ['error', 'always'],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    // allow devDependencies for test files, resolve from root
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
        packageDir: [
          path.join(process.cwd(), 'package.json'),
        ],
      },
    ],
    // flow vs default props
    'react/default-props-match-prop-types': 'off',
  },
}

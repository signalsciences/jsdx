module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:compat/recommended',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  plugins: [
    'compat',
    'flowtype',
    'jest',
    'react',
  ],
  rules: {
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
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],

    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    // flow vs default props
    'react/default-props-match-prop-types': 'off',
  },
}

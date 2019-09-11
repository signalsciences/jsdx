module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
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
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'import/no-extraneous-dependencies': 'off',
    // flow vs default props
    'react/default-props-match-prop-types': 'off',
  },
}

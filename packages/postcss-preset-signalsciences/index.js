module.exports = function () {
  return {
    plugins: {
      'postcss-import': {},
      'postcss-for': {},
      'postcss-each': {},
      'postcss-conditionals': {},
      'postcss-nested': {},
      'postcss-custom-properties': {
        preserve: false,
      },
      'postcss-calc': {
        mediaQueries: true,
        selectors: true,
      },
      'postcss-discard-comments': {
        removeAll: true,
      },
      'postcss-color-function': {},
      'postcss-preset-env': {
        autoprefixer: {
          remove: false,
          grid: 'autoplace',
        },
        stage: 0,
      },
      'postcss-reporter': {},
    },
  }
}

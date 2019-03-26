const importPlugin = require('postcss-import')
const forPlugin = require('postcss-for')
const eachPlugin = require('postcss-each')
const conditionalsPlugin = require('postcss-conditionals')
const nestedPlugin = require('postcss-nested')
const customMediaPlugin = require('postcss-custom-media')
const customPropertiesPlugin = require('postcss-custom-properties')
const calcPlugin = require('postcss-calc')
const colorFunctionPlugin = require('postcss-color-function')
const discardCommentsPlugin = require('postcss-discard-comments')
const presetEnvPlugin = require('postcss-preset-env')
const reporterPlugin = require('postcss-reporter')

module.exports = (options) => {
  let plugins = {
    import: {},
    for: {},
    each: {},
    conditionals: {},
    nested: {},
    customMedia: {},
    customProperties: {
      preserve: false,
    },
    calc: {
      mediaQueries: true,
      selectors: true,
    },
    colorFunction: {},
    discardComments: {
      removeAll: true,
    },
    env: {
      autoprefixer: {
        remove: false,
        grid: 'autoplace',
      },
    },
    reporter: {},
  }

  if (options && options.plugins) {
    plugins = {
      ...plugins,
      ...options.plugins,
    }
  }

  return {
    plugins: [
      plugins.import ? importPlugin(plugins.import) : false,
      plugins.for ? forPlugin(plugins.for) : false,
      plugins.each ? eachPlugin(plugins.each) : false,
      plugins.conditionals ? conditionalsPlugin(plugins.conditionals) : false,
      plugins.nested ? nestedPlugin(plugins.nested) : false,
      plugins.customMedia ? customMediaPlugin(plugins.customMedia) : false,
      plugins.customProperties ? customPropertiesPlugin(plugins.customProperties) : false,
      plugins.calc ? calcPlugin(plugins.calc) : false,
      plugins.colorFunction ? colorFunctionPlugin(plugins.colorFunction) : false,
      plugins.discardComments ? discardCommentsPlugin(plugins.discardComments) : false,
      plugins.env ? presetEnvPlugin(plugins.env) : false,
      plugins.reporter ? reporterPlugin(plugins.reporter) : false,
    ].filter(Boolean),
  }
}

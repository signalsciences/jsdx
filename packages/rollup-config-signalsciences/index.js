/* @flow */

const path = require('path')
const bundleSize = require('rollup-plugin-bundle-size')
const babel = require('rollup-plugin-babel')
const flowEntry = require('rollup-plugin-flow-entry')
const postcss = require('rollup-plugin-postcss')
const resolve = require('rollup-plugin-node-resolve')

/* PostCSS */
const postcssImport = require('postcss-import')
const postcssFor = require('postcss-for')
const postcssEach = require('postcss-each')
const postcssConditionals = require('postcss-conditionals')
const postcssNested = require('postcss-nested')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssCalc = require('postcss-calc')
const postcssDiscardComments = require('postcss-discard-comments')
const postcssColorFunction = require('postcss-color-function')
const postcssPresetEnv = require('postcss-preset-env')
const postcssReporter = require('postcss-reporter')
const postcssClean = require('postcss-clean')

/* eslint-disable-next-line import/no-dynamic-require */
const pkg = require(path.resolve(process.cwd(), './package.json'))

const banner = `/**
 *
 * Copyright (c) ${(new Date()).getFullYear()} ${pkg.author}
 *
 * This code is licensed under the ${pkg.license} license.
 *
 * ${pkg.name} v${pkg.version}
 *
 * ${pkg.homepage}
 *
 */
`

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: pkg.main,
      format: 'cjs',
    },
    {
      banner,
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    // TODO: remove postcss dep
    postcss({
      plugins: [
        postcssImport,
        postcssFor,
        postcssEach,
        postcssConditionals,
        postcssNested,
        postcssCustomProperties({
          preserve: false,
          warnings: true,
        }),
        postcssCalc({
          mediaQueries: true,
          selectors: true,
        }),
        postcssDiscardComments({
          removeAll: true,
        }),
        postcssColorFunction(),
        postcssPresetEnv({
          autoprefixer: {
            remove: false,
          },
          stage: 0,
        }),
        postcssReporter(),
        postcssClean(),
      ],
    }),
    babel(),
    flowEntry(),
    bundleSize(),
  ],
}

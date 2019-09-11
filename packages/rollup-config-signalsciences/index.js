const path = require('path')
const babel = require('rollup-plugin-babel')
const bundleSize = require('rollup-plugin-bundle-size')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

/* eslint-disable-next-line import/no-dynamic-require */
const pkg = require(path.resolve(process.cwd(), './package.json'))

const banner = `/*!
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

module.exports = [
  {
    input: 'src/index.js',
    output: {
      banner,
      name: pkg.name,
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      resolve(),
      babel(),
      commonjs(),
      process.env.NODE_ENV === 'production'
        && terser({
          ecma: 5,
          output: {
            comments: /^!/,
          },
          warnings: true,
        }),
      bundleSize(),
    ],
  },
  {
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
      babel(),
      bundleSize(),
    ],
  },
]

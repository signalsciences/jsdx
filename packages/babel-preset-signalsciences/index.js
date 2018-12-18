/* @flow */

/* eslint-disable-next-line func-names */
module.exports = function () {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              'last 1 version',
            ],
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ],
  }
}

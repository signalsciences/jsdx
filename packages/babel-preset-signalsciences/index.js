module.exports = function () {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  }
}

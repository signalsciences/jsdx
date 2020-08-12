const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const bundleSize = require("rollup-plugin-bundle-size");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");

/* eslint-disable-next-line import/no-dynamic-require */
const pkg = require(path.resolve(process.cwd(), "./package.json"));

const banner = `/*!
 *
 * Copyright (c) ${new Date().getFullYear()} ${pkg.author}
 *
 * This code is licensed under the ${pkg.license} license.
 *
 * ${pkg.name} v${pkg.version}
 *
 * ${pkg.homepage}
 *
 */
`;

const umd = pkg["umd:main"];
const cjs = pkg.main;
const esm = pkg.module;

if (!cjs || !esm) {
  console.error(
    "\n!! Error: `main` and `module` build targets are required.\n"
  );
  process.exit(1);
}

if (!umd) {
  console.warn("\n!! Warning: Build target missing for `umd:main`\n");
}

module.exports = [
  umd && {
    input: "src/index.js",
    output: {
      banner,
      name: pkg.name,
      file: umd,
      format: "umd",
      globals: {
        react: "React",
      },
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      nodeResolve(),
      babel({ babelHelpers: "bundled" }),
      commonjs(),
      process.env.NODE_ENV === "production" &&
        terser({
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
    input: "src/index.js",
    output: [
      {
        banner,
        file: cjs,
        format: "cjs",
      },
      module && {
        banner,
        file: esm,
        format: "es",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [nodeResolve(), babel({ babelHelpers: "bundled" }), bundleSize()],
  },
].filter(Boolean);

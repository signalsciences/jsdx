module.exports = {
  extends: [
    "airbnb",
    "plugin:compat/recommended",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
  ],
  plugins: ["compat", "flowtype", "prettier"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
  },
  overrides: [
    {
      files: ["test/**/*.{js,jsx}", "**/*.test.{js,jsx}", "**/*.spec.{js,jsx}"],
      env: { jest: true },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};

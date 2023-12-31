// @eslint-ignore-file
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    // Add your project-specific ESLint rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules", "build", ".eslintrc.js", "babel.config.js"],
};

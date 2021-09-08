const path = require("path");
const resolve = (_path) => path.resolve(__dirname, _path);

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser", // 配置ts解析器
  parserOptions: {
    ecmaVersion: 2020,
    project: resolve("./tsconfig.json"),
    tsconfigRootDir: resolve("./"),
    sourceType: "module",
  },
  // plugins: ['prettier'],
  rules: {
    // indent: ["warn", 2],
    // "no-console": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
  },
};

const fixupConfigRules = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const globals = require("globals");
const ts = require("typescript-eslint");

const compat = new FlatCompat();

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  ...fixupConfigRules(
    compat.config({
      extends: ["standard"],
    })
  ),

  ...ts.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  prettier,
];

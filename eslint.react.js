import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginReactHookConfig from "eslint-plugin-react-hooks";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat();

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  ...fixupConfigRules(
    compat.config({
      extends: ["standard"],
    })
  ),

  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },

  ...ts.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx", "**.*.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  ...fixupConfigRules(pluginReactConfig),
  ...fixupConfigRules(pluginReactHookConfig),

  prettier,
];

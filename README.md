# @adson/config-js

# Adson's ESLint and Prettier configs.

---

## ESLINT

### Node:

```js
// eslint.config.js

import NodeEslintConfig from "@adson/config-js/eslint.node.js";

export default [
  ...NodeEslintConfig,
  // ...
];
```

### ReactJS:

```js
// eslint.config.js

import NodeEslintConfig from "@adson/config-js/eslint.node.js";

export default [
  ...NodeEslintConfig,
  // ...
];
```

---

## Prettier

```json
// .prettierrc

{
  "extends": "@adson/config-js/prettier-config.json"
}
```

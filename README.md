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

```js
// .prettierrc.js

import prettierConfig from "@adson/config-js/prettier.js";

export default {
  ...prettierConfig,
  semi: false,
};
```

const RULE_STATUS = {
  WARN: "warn",
  OFF: "off",
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": RULE_STATUS.OFF,
    "react-refresh/only-export-components": [
      RULE_STATUS.WARN,
      { allowConstantExport: true },
    ],
    "react/prop-types": RULE_STATUS.OFF,
  },
};

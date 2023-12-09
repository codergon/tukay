module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react-refresh", "perfectionist"],
  rules: {
    "perfectionist/sort-objects": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-interfaces": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "perfectionist/sort-named-imports": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
  },
};

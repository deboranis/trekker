module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    // TODO: alterar para error depois de corrigir a issue https://github.com/nubank/nu-website-br/issues/364
    "@typescript-eslint/no-non-null-assertion": "warn",
    // TODO: alterar para error depois de corrigir a issue https://github.com/nubank/nu-website-br/issues/364
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      { assertionStyle: "never" },
    ],
  },
  overrides: [
    {
      files: ["**/*.test.ts?(x)"],
      extends: [
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
      rules: {
        "testing-library/prefer-user-event": "error",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
        ],
      },
    },
  ],
};

module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 1,
    'prettier/prettier': 'error',
    'arrow-body-style': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 1,
    'import/no-anonymous-default-export': 'error',
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 'off',
    'react/react-in-jsx-scope': 'off', // React is always in scope with Blitz
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/button-has-type': 0,
    'jsx-a11y/anchor-is-valid': 'off', // Doesn't play well with Blitz/Next <Link> usage
    'jsx-a11y/no-noninteractive-tabindex': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {},
    },
  },
};

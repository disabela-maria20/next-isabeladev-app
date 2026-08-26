import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      perfectionist,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      /*
       * TypeScript
       */
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],

      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],

      /*
       * Perfectionist
       */
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],

      'simple-import-sort/exports': 'error',

      /*
       * Imports
       */
      'simple-import-sort/imports': 'error',
    },
  },

  prettier,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;

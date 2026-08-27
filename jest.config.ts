import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  collectCoverageFrom: ['shared/**/*.{ts,tsx}', '!shared/**/*.d.ts'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/shared/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testEnvironment: 'jest-environment-jsdom',

  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

export default createJestConfig(customJestConfig);

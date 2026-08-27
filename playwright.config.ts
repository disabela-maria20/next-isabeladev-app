import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'mobile-chromium',
      use: {
        ...devices['iPhone 13'],
      },
    },
  ],

  testMatch: '**/*.spec.ts',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'yarn dev',
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:3000',
  },
});

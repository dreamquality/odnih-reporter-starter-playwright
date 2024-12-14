import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  retries: process.env.CI ? 2 : 3,
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',  // on
    video: 'retain-on-failure', // on

     /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
     actionTimeout: 0,
     locale: 'en-US',
     extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    acceptDownloads: true, // Enable downloads
  },
  reporter: [
    ['dot'],
    ['line'],
    ['odhin-reports-playwright', { 
      testFolder: 'tests',
      title: 'Odhin Reports',
      project: 'QA Tests',
      release: '9.87.6',
      testEnvironment: 'DEV',
      embedAssets: true,
      embedAttachments: true,
      outputFolder: 'my-report',
      startServer: false,
      consoleLog: true,
      simpleConsoleLog: false,
      consoleError: true,
      testOutput: 'only-on-failure',
      consoleTestOutput: false,
      initialTheme: "dark",
            indexFilename: "index",
            testGroupOnConsole: true,
            testProjectOnConsole: true,
            testListColumns: ["Group", "Project", "File"],
    }]
  ],




    /* Maximum time one test can run for. */
    // timeout: 200 * 1000,

    // expect: {
    //   /**
    //    * Maximum time expect() should wait for the condition to be met.
    //    * For example in `await expect(locator).toHaveText();`
    //    */
    //   timeout: 20000
    // },

    // forbidOnly: !!process.env.CI,

    // workers: process.env.CI ? 2 : 1




    projects: [
    
    {
      name: 'chromium',

      /* Project-specific settings. */
      use: {
        ...devices['Desktop Chrome'],
        locale: 'en-US',
        extraHTTPHeaders: {
          'Accept-Language': 'en-US,en;q=0.9',
        },
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        locale: 'en-US',
        extraHTTPHeaders: {
          'Accept-Language': 'en-US,en;q=0.9',
        },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        locale: 'en-US',
        extraHTTPHeaders: {
          'Accept-Language': 'en-US,en;q=0.9',
        },
      },
    },
  ]
});

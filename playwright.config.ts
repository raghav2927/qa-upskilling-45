// playwright.config.ts

import {defineConfig, devices} from '@playwright/test';

export default defineConfig({

    testDir: './playwright/tests',
    timeout: 30_000,
    retries: 1,
    reporter: [
        ['html', {outputFolder: 'reports/html' }],
        ['list']
    ],

    use: {

        baseURL: 'https://saucedemo.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
    },

    projects: [

        {name: 'chromium', use: {...devices['Desktop Chrome']}},
        {name: 'firefox', use: {...devices['Desktop Firefox']}},
    ],
});

//playwright/tests/day01.spec.ts

import {test, expect} from '@playwright/test';

test('Day-01- Hello World: Google Title Check', async({ page }) =>{

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google2');
});


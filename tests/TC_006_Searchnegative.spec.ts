


import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { SearchPage } from '../pages/searchPage';
import '../hooks/commonHooks'


test('TC_006_SearchProduct_Negative @regression, @master', async ({ page }) => {

   // await page.goto(TestConfig.appUrl);

    const sp = new SearchPage(page);
    
    // 1. Search for 'invalid product'
    await sp.searchProduct(TestConfig.invalidproduct);
    await sp.clicksearch();

    // 2. Pass 'invalidProduct123' into validatesearch so it checks for "Search - invalidProduct123"
    const isProductVisible = await sp.validatesearch('invalidProduct123');
    expect(isProductVisible).toBeTruthy()

    await page.waitForTimeout(2000)
});
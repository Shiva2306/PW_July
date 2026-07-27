
import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { SearchPage } from '../pages/searchPage';
import '../hooks/commonHooks'


test('TC_005_SearchProduct_Positive @sanity, @master', async ({ page }) => {

  //  await page.goto(TestConfig.appUrl);

    const sp = new SearchPage(page);
    
    // 1. Search for 'iPhone'
   // await sp.searchProduct('iPhone');
    await sp.searchProduct(TestConfig.productName);
    await sp.clicksearch();

    // 2. Pass 'iPhone' into validatesearch so it checks for "Search - iPhone"
    const isProductVisible = await sp.validatesearch('MacBook');
    expect(isProductVisible).toBeTruthy();
});

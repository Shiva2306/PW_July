

import { test, expect } from "../fixtures/loginfixture"
import { TestConfig } from "../test.config";
import '../hooks/commonHooks'

test("Invalid Login", async ({ page, homePage, loginPage }) => {

   // await page.goto(TestConfig.appUrl);

   //here we have not created an object of homepage and passed the page reference
    await homePage.forLogin();

       //here we have not created an object of loginpage and passed the page reference
    await loginPage.enteremail(TestConfig.email1);

    await loginPage.enterpassword(TestConfig.password1);

    await loginPage.clickloginbutton();

    const errorMessage = await loginPage.isInvalidErrorMessage();

    expect(errorMessage).toBeTruthy();

});

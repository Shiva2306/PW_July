

import { test, expect } from "../fixtures/loginfixture"
import { TestConfig } from "../test.config";

test("Invalid Login", async ({ page, homePage, loginPage }) => {

    await page.goto(TestConfig.appUrl);

   //here we have not created an object of homepage and passed the page reference
    await homePage.forLogin();

       //here we have not created an object of loginpage and passed the page reference
    await loginPage.enteremail("wrong@gmail.com");

    await loginPage.enterpassword("wrongpassword");

    await loginPage.clickloginbutton();

    const errorMessage = await loginPage.isInvalidErrorMessage();

    expect(errorMessage).toBeTruthy();

});

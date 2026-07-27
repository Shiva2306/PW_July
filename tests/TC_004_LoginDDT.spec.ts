

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';

import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { DataProvider1 } from '../utils/dataProvider';
import '../hooks/commonHooks'





//Load JSON test data logindata.json

const jsonPath="testData/loginData.json";
const jsonTestData=DataProvider1.getTestDataFromJson(jsonPath);

for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven, @master`, async({page})=>{

       
       
        //  await page.goto(TestConfig.appUrl)
        //    await page.waitForTimeout(2000)

            let hp = new HomePage(page);
        await hp.forLogin();
        

    let lp = new LoginPage(page);
        //await loginPage.login(data.email, data.password);
       await lp.enteremail(data.email);
       await lp.enterpassword(data.password);
       await lp.clickloginbutton(); 

        if(data.expected.toLowerCase()==='success')
        {
          //  const myAccountPage=new MyAccountPage(page);
        //   await myAccountPage.isMyAccountPageExists();
           // await expect(page.getByRole('heading', { level: 2 })).toBeVisible();  
                       await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();
      }
        else{
            const errorMessage=await lp.isInvalidErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toBeTruthy()
        }
    })

}

//This code reads login data from a JSON file and stores it in jsonTestData.
//  Then, it loops through each data set and runs the same login test multiple times with different inputs (data-driven testing).
//  For each entry, it opens the site, performs login using the given email and password, and checks the result. 
// If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.



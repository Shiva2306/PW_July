
import {expect, test} from '@playwright/test'
import { RegisrationPage } from '../pages/registrationPage'
import { HomePage } from '../pages/homePage'
import { TestConfig } from '../test.config'

test('Registration test @sanity, @master', async({page})=>{

   await page.goto(TestConfig.appUrl)
      await page.waitForTimeout(5000)

      let hp= new HomePage(page)
      await hp.forRegistration()

     let rp = new RegisrationPage(page)
     await rp.performRegistration()

     let confirmation=await rp.accountconfirmation()
     expect(confirmation).toBeTruthy()

           await page.waitForTimeout(5000)


})
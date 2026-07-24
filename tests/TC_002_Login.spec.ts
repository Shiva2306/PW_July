

import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { TestConfig } from '../test.config'

test('Login test @regression, @master', async({page})=>{

   await page.goto(TestConfig.appUrl)
   await page.waitForTimeout(5000)

   let hp = new HomePage(page)
   await hp.forLogin()


  let lp= new LoginPage(page) //When we create an object, constructor get invoked, constructor is used to initialize instance variables
  //lp.performLogin()

   await page.waitForTimeout(5000)

   let headers= await lp.validateheaders()
   //  expect(headers).toHaveLength(3)
   // expect(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter'])
    expect.soft(headers).toHaveLength(2)
   expect.soft(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter'])
   //expect(headers).toContain('My Account')

})
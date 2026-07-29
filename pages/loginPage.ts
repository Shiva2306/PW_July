
//readonly = final
//Page Object Model - Design pattern

import { Locator, Page } from "@playwright/test";
import { TestConfig } from '../test.config'


//1) Locators
//2) Constructor
//3) Action methods

export class LoginPage
{
    //variables which will store the locators
    private emailID: Locator;
    private password: Locator;
    private loginbutton: Locator;
    private loginerrormessage: Locator;
    private headers: Locator;

    //constructor - Initialize locators here
    //Constructor is used initialze instance variables
    public constructor(page:Page)
    {
        this.emailID=page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password=page.getByRole('textbox', {name:'Password'})
        this.loginbutton=page.getByRole('button', {name:'Login'})
        this.loginerrormessage=page.locator('div.alert')
        this.headers=page.getByRole('heading', { level: 2 })
    }

    //Action methods
 
   /* public async performLogin() : Promise<void>
    {
       await this.emailID.fill(TestConfig.email1)
       await this.password.fill(TestConfig.password1)
       await this.loginbutton.click()
    }  */
   

public async enteremail(emailid:string) 
{
    await this.emailID.fill(emailid)
}

public async enterpassword(pass12: string)
{
     await this.password.fill(pass12)
  
}

public async clickloginbutton()
{
   await this.loginbutton.click() 
}
  
 



     public async isInvalidErrorMessage() : Promise<boolean>
    {
        return await this.loginerrormessage.isVisible()

    }
 
    public async validateheaders() :Promise<string[]>
    {
       return this.headers.allInnerTexts()
    }




}
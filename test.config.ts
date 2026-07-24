

//test.config.ts
/* 
export class TestConfig{
static appUrl="https://tutorialsninja.com/demo/index.php?route=common/home"
//static appUrl2 = "https://tutorialsninja.com/demo"
//valid login credentials- create your own login account
static email1="qedge123@gmail.com"
static password1="qedge123@gmail.com"

//product details
static productName="MacBook"
static invalidproduct="invalidProduct123"
productQuantity="2"
totalPrice="$1,204.00"
} */

 

// test.config.ts

export class TestConfig {

    //BASE_URL!
    static appUrl = process.env.BASE_URL!;

    static email1 = process.env.APPUSERNAME!;

    static password1 = process.env.PASSWORD!;

    // Product details
    static productName = "MacBook";
    static invalidproduct = "invalidProduct123";
   
}
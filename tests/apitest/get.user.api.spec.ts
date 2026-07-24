

import {test, expect} from '@playwright/test'

//Playwright inbuilt fixtures - page, request, expect, browser

//Selenium - 2 libraries - web ui + api testing(rest assured)
//Playwright - 1 library - web ui + api testing


let AUTH_TOKEN = { Authorization: 'Bearer c111c178fd5307ffa418e434ea8ba3b5b4df098aaf15ca2e27c9f07f5742410f' };


test('get user test', async ({ request }) => {

    let response = await request.get('https://gorest.co.in/public/v2/users/8555903', {
        headers: AUTH_TOKEN
    });

   // console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

     console.log(response.status());
     console.log(response.statusText());

     //expect(response.status()).toBe(200);
 
});

//post, put, get, delete - which http method is idempotent
//idempotent -  put, get, delete
//non idempotent - post


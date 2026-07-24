
import {test, expect} from '@playwright/test'


let AUTH_TOKEN = { Authorization: 'Bearer c111c178fd5307ffa418e434ea8ba3b5b4df098aaf15ca2e27c9f07f5742410f' };


test('Delete a user test', async ({ request }) => {

    //JS Object to JSON: Serialization
    let response = await request.delete('https://gorest.co.in/public/v2/users/8555903', {
        headers: AUTH_TOKEN,
    });

    console.log(response.status());//204
    console.log(response.statusText()); //No Content
});
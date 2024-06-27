import {test} from '@playwright/test';

//npx playwright test --headed to run in headed mode
// --project [broeswer name to test on specific browser]
//important to use the page parameter to define the actual page to work with
//you can use [attribute = value ] when working with locators 
test.skip('Basic Navigation', async({page})=>{
    await page.goto('https://gitlab.com/');
    // await page.waitForTimeout(3000);
    await page.reload();

})

test.skip('Interacting with the Web Elements on GitLab', async({page})=>{
    await page.goto('https://gitlab.com/');

    // await page.click('#navigation');
    await page.locator('#navigation').getByRole('link', {name:'Get free trial'}).click();
    
    await page.locator('#new_user_first_name').fill('Dolapo');
    await page.locator('[id="new_user_last_name"]').fill('Olabanji');
    
    await page.waitForTimeout(5000)
    


})

test('Using Various Locator methods', async ({page})=>{

    await page.goto('https://gitlab.com');
    // await page.getByRole('tab', {name: 'Security' }).click()
    // await page.waitForTimeout(3000)
    await page.click(':has-text("Security")')//this doesnt work for some reason
    await page.waitForTimeout(3000)
})


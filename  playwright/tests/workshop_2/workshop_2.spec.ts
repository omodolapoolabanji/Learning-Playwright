import {test, expect} from '@playwright/test';

test.skip('Automating forms and submissions', async({page})=>{

    await page.goto('https://demo.playwright.dev/todomvc/');
    const newTodo = await page.getByPlaceholder('what needs to be done?');//seems like this method is more lenient with type sensitivity and all that good stuff
    
    
    await newTodo.fill('Clean the goddamn room!'); //use this when you need to use keyboard actions
    await newTodo.press('Enter');
    
    await newTodo.fill('Clean the goddamn kitchen!');
    await newTodo.press('Enter');
    
    const firstTodo = await page.getByTestId('todo-item').nth(0);//this is to get the nth element when grabbing multiple elements 
    await firstTodo.getByRole('checkbox').check()

    const secondTodo = await page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass('completed')// use this when dealing with assertions  
    // await secondTodo.getByRole()
    await expect(firstTodo).toHaveClass('completed');




})

test.only('Handling Form', async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/');
    const placeHolder = '[placeholder="What needs to be done?"]'
    await page.fill(placeHolder, 'man idk')
    await page.locator(placeHolder).press("Enter")
    const checkbox = page.locator('.toggle');
    await checkbox.check();


})
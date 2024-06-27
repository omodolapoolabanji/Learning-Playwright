import {test, expect} from '@playwright/test'

test.skip('Interactions', async ({page})=>{

    await page.goto('http://127.0.0.1:5500/%20playwright/tests/workshop_3/index.html')

    //link leads to deployed local server using the live server extension on vscode
    const hoverSelector = 'button#hover-me'
    // await page.waitForTimeout(3000)
    await page.hover(hoverSelector)
    expect(await page.textContent(hoverSelector)).toContain('Text Changed');
    const rightBtn = 'button#context-menu'
    await page.click(rightBtn, {button: 'right'});
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect(await page.locator('img').count()).toBe(1)


})

test.skip('drag-n-drop', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/%20playwright/tests/workshop_3/index.html')
    await page.dragAndDrop('.drag-source', '.drop-target');
    expect(await page.locator('div.drop-target').textContent()).toContain('Success')
})

test.skip('Another drag and drop', async({page})=>{

    await page.goto('http://127.0.0.1:5500/%20playwright/tests/workshop_3/index.html')
    await page.locator('div.drag-source').hover();
    await page.mouse.down(); 
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    // expect(await page.locator('.drop-target').textContent()).toContain('Success')
    expect(await page.textContent('.drop-target')).toContain('Success');

})

test.only('another test', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/%20playwright/tests/workshop_3/index.html')
    const inputSelector = '#iframe-input' 
    const iframeElement = await page.frame({name: 'iframeName' })
    if(iframeElement)
    {await iframeElement.type(inputSelector, 'Hello Playwright')
    expect( await iframeElement.locator(inputSelector).inputValue()).toContain('Hello Playwright')}
    else{
        console.error('Iframe Is Not Available.')
    }
})
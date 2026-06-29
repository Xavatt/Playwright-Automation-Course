const {test, expect} = require('@playwright/test');

test('Dropdown Function', async ({page})=>{

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const dropDown = page.locator("select.form-control");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await dropDown.selectOption("consult");

    await page.pause(); // It helps to dont close right away so you can observe the results
});

test('Select Botton', async ({page})=>{

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const acceptBtn = page.locator("#okayBtn");
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");

    await page.locator(".radiotextsty").last().click();
    await acceptBtn.click();

    //assertion
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    // page.locator(".radiotextsty").last().isChecked(); // This is not an assertion as it self is only to help to verify boolean
    //await page.pause();
});

test.only('Checkbox', async ({page})=> {

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const acceptBtn = page.locator("#okayBtn");
    const termCheckBox = page.locator("#terms");
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");

    await termCheckBox.check();
    //await termCheckBox.click(); Another way to click on checkboxes
    //await termCheckBox.uncheck(); // You can also uncheck using this method
    // assertion
    await expect(termCheckBox).toBeChecked();
    //await page.pause();
});
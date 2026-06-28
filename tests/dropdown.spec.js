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

test.only('Select Botton', async ({page})=>{

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const acceptBtn = page.locator("#okayBtn");
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");

    await page.locator(".radiotextsty").last().click();
    await acceptBtn.click();
    await page.pause();
});
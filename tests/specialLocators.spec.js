const {test, expect} = require('@playwright/test');

test('Special Locators Playwright', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();

    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("ThisIsThePassword")
    
    await page.getByRole("button", {name: 'Submit'}).click();
    //await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    // It wait 5 seconds to show if not it will fail
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", {name: 'Shop'}).click();

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    await page.pause();
})

test.only('Special Locators Playwright Timeouts', async({page})=>{

    const slowExpect = expect.configure({timeout : 9000}); //Now instead of waiting 5 sec to verify if something is appearing on the page it will wait 9 sec, only in this test
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();

    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("ThisIsThePassword")
    
    await page.getByRole("button", {name: 'Submit'}).click();
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    // It wait 5 seconds to show if not it will fail
   await page.getByRole("link",{name : "Shop"}).click();
   await expect(page.locator(".my-4").first()).toHaveText("Shop Name");

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    //await page.pause();
})
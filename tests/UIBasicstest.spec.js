const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test',async ({browser})=>{
    /*
     * `async` is required because Playwright actions (clicks, navigations, etc.)
     * return Promises — async lets us use `await` inside to pause execution until
     * each action completes before moving to the next one.
     *
     * There is no `function` keyword here because `() => {}` is an arrow function,
     * which is another way to declare an anonymous function (a function with no name).
     * The traditional form would be: function() {} — both are equivalent here.
     */
    
    // Chrome .newContext opens a clean browser like incognito 
    const context = await browser.newContext(); // Only browser is open inside the () you can pass some cookies or not
    const page = await context.newPage(); // Create a new page and you can start typing thw url
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());
    await page.locator('#username').fill("adminuser");
    await page.locator("[type='password']").fill("allmight");
    await page.locator('#signInBtn').click();

   
});

test('Error Message Playwright test',async ({browser})=>{

    const context = await browser.newContext(); // Only browser is open inside the () you can pass some cookies or not
    const page = await context.newPage(); // Create a new page and you can start typing thw url
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill("adminuser");
    await page.locator("[type='password']").fill("allmight");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
   
});

test.only('Login Correct Playwright test',async ({page})=>{

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const singINBtn = page.locator('#signInBtn');
    const cardTtitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await username.fill("adminuser");
    await password.fill("Learning@830$3mK2");
    await singINBtn.click();
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
    await username.fill("rahulshettyacademy");
    await singINBtn.click();
    console.log(await cardTtitles.nth(1).textContent());
    console.log(await cardTtitles.first().textContent());
    console.log(await cardTtitles.allTextContents());
   
});

test('Page Playwright test',async ({page})=>{

    // Here we can just called the page because as default the browser will be open as a new context and with a new page
    await page.goto("https://google.com.mx")
    // get tittle - assertion if its correct
    console.log(await page.title())
    await expect(page).toHaveTitle("Google");
    
});
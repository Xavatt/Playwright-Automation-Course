const {test, expect} = require('@playwright/test');

test('Child Windows Handle', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const documentLink = page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    /*
     * Promise.all is required here because waitForEvent and click are tightly coupled in time.
     * If you call waitForEvent first and then click, the new tab can open so fast that the event
     * fires before your listener is registered — you miss it. If you click first and then call
     * waitForEvent, the event has already been emitted and can never be caught.
     * Running both in parallel via Promise.all ensures the listener is active at the exact moment
     * the click triggers the new tab.
     *
     * Both promises must be passed inside an array so Promise.all can wait for all of them
     * and return their resolved values in the same order.
     */
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // resolves with the new Page object when a new tab opens
        documentLink.click()          // triggers the new tab
    ]);

    console.log(await newPage.locator(".red").textContent());

});
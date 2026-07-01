const {test, expect} = require('@playwright/test');

/* test('Register New Client', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const registerBtn = page.locator("[class='login-wrapper-footer-text']");
    const firstNameField = page.locator("#firstName");
    const lastNameField = page.locator("#lastName");
    const userEmailField = page.locator("#userEmail");
    const userMobile = page.locator("#userMobile");
    const userPwd = page.locator("#userPassword");
    const userConfirmPwd = page.locator("#confirmPassword");
    const checkBoxAge = page.locator("[type='checkbox']")


    await registerBtn.click();

    await firstNameField.fill("Xavier");
    await lastNameField.fill("Guinto");
    await userEmailField.fill("xavierguinto13@gmail.com");
    await userMobile.fill("5532767643");
    await userPwd.fill("TestingIsLife1!");
    await userConfirmPwd.fill("TestingIsLife1!");

    await checkBoxAge.check();
    await page.locator("#login").click();
    //await page.locator("div:has-text('Please check above checkbox')")
    
    console.log(await userConfirmPwd.inputValue())
}); */

test('Login Usuario Registrado', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const userEmailField = page.locator("#userEmail");
    const userPwd = page.locator("#userPassword");
    const loginBtn = page.locator("#login");
    const titleCards = page.locator(".card-body b")

    await userEmailField.fill("xavierguinto13@gmail.com");
    await userPwd.fill("TestingIsLife1!");
    await loginBtn.click()

    // await page.waitForLoadState('networkidle'); // This makes a wait until the page is completely loaded 
    // titleCards.first().waitFor(); // This is another way to wait until those elements are present but only for when is 1 element present thats the reason why we are adding first()
    console.log(await titleCards.nth(1).textContent());
    console.log(await titleCards.first().textContent());
    console.log(await titleCards.allTextContents());
});

test('Add item to cart', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const userEmailField = page.locator("#userEmail");
    const userPwd = page.locator("#userPassword");
    const loginBtn = page.locator("#login");
    const titleCards = page.locator(".card-body b")
    const addToCartBtn = page.locator("[class*='shopping-cart']")
    const myCartTitle = page.locator("div[class='cartSection'] h3");

    await userEmailField.fill("xavierguinto13@gmail.com");
    await userPwd.fill("TestingIsLife1!");
    await loginBtn.click()

    const nameProduct = await titleCards.nth(0).textContent(); 
    await addToCartBtn.nth(1).click();

    await addToCartBtn.nth(0).click();
    await expect(myCartTitle).toContainText(nameProduct);

    await page.pause();
    
})

test.only('Udemy Attempt', async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const userEmailField = page.locator("#userEmail");
    const userPwd = page.locator("#userPassword");
    const loginBtn = page.locator("#login");
    const titleCards = page.locator(".card-body")
    const productName = 'ZARA COAT 3'

    await userEmailField.fill("xavierguinto13@gmail.com");
    await userPwd.fill("TestingIsLife1!");
    await loginBtn.click()

    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor(); // Since the picture of the products takes a little more to load we have to wait until these are fully loaded
    console.log(await titleCards.locator("b").allTextContents());
    // To get Zara Coat 3
    const countProducts = await titleCards.count();
    for(let i =0; i < countProducts; i++)
    {
        
        if (await titleCards.nth(i).locator("b").textContent() === productName) // Since title cards is a locator automation tools give you the change to modify locators so adding .locators we will start from the position of the previous locator in this case the locator title cards
        {
            // Add to cart
            await titleCards.nth(i).locator("text= Add To Cart").click(); // If we use that locator without restricting the scope it will give us the entire elements that match but since we are restrigting the scope we can use it for this scenario
            console.log("Item added to the cart")
            break;
        }
    }
    //await page.pause();
});

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
    // To get Zara Coat 3
    const countProducts = await titleCards.count();
    for(let i =0; i < countProducts; i++)
    {
        
        if (await titleCards.nth(i).locator("b").textContent() === productName) // Since title cards is a locator automation tools give you the change to modify locators so adding .locators we will start from the position of the previous locator in this case the locator title cards
        {
            // Add to cart
            await titleCards.nth(i).locator("text= Add To Cart").click(); // If we use that locator without restricting the scope it will give us the entire elements that match but since we are restrigting the scope we can use it for this scenario
            break;
        }
    }
    // Search the product recently added on the shopping card
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const boolCart = await page.locator(`h3:has-text('${productName}')`).isVisible();
    expect(boolCart).toBeTruthy();

    // Finish payment method
    const checkoutButton = page.locator("button[type='button']").last();
    await checkoutButton.click();

    /*
      Card fields share the same generic class ("input txt"), so first()/last()
      depend on DOM order — fragile if the form markup changes.
      No coupon used in this flow, left empty on purpose.
    */
    const creditNumber = page.locator("[class=field]");
    const nameCard = page.locator("[class='input txt']").last();
    const cvvField = page.locator("[class='input txt']").first();
    const cupon = page.locator("[name='coupon']");

    await creditNumber.locator("[class*=text-validated]").fill("4542319992929322");
    await cvvField.fill("235");
    await nameCard.fill("Xavier Guinto");
    await cupon.fill("");

    //Shipping information validation using input
    /*
      Confirms the shipping email pre-fills correctly from the account/session,
      not just that the field is visible.
      Two ways to validate this were tried: through the input value (used here)
      or through the label text (kept commented below as reference).
    */
    const emailFieldValidation = page.locator("div[class*='user__name'] input").first();
    const country = page.locator("[placeholder*='Country']")
    const email = "xavierguinto13@gmail.com"

    const textEmailValidation = await emailFieldValidation.inputValue();
    await expect(emailFieldValidation).toHaveValue(email);
    
    // Shipping information using label
    /* 
    const emailFieldValidation = page.locator("div[class*='user__name'] label");
    const country = page.locator("div[class*='user__name'] input").last();
    const email = "xavierguinto13@gmail.com"

    const textEmailValidation = await emailFieldValidation.textContent();
    await expect(emailFieldValidation).toContainText(email);
 */

    /*
      The country field doesn't react to fill() — the page needs each keystroke
      typed one by one to trigger the autocomplete, hence pressSequentially
      instead of fill.
      Dropdown has no stable selector per option, so we loop through all buttons
      and match by exact text. The leading space in ' Mexico' is intentional —
      matches the site's actual rendered text.
    */
    await country.pressSequentially('mex');
    const optionDropdown = page.locator(".ta-results");
    await optionDropdown.waitFor();

    const optionCounts = await optionDropdown.locator("button").count();

    for(let i=0; i<optionCounts;i++)
    {
        const textCountryName = await optionDropdown.locator("button").nth(i).textContent();
        if(textCountryName === ' Mexico')
        {
            await optionDropdown.locator("button").nth(i).click();
            break;
        }
    }
    // Place the order
    const placeOrder = page.locator(".action__submit");
    const thanksMessage = page.locator(".hero-primary")
    const thanksMessageValue = " Thankyou for the order. "

    await placeOrder.click();
    await expect(thanksMessage).toHaveText(thanksMessageValue);

    /*
      The confirmation label renders as "Order Id: <id> | ..." in a single
      text node, so we split on "|" to isolate the id instead of relying on
      a dedicated selector (the site doesn't expose one). The id segment
      comes back with leading/trailing whitespace from that split, so trim()
      is required before comparing it against the table's cell text later.
    */
    const orderID = page.locator("label.ng-star-inserted");
    const orderIDValue = await orderID.textContent();
    const textArrayIdOrder = orderIDValue.split("|");
    const textIdOrder = textArrayIdOrder[1].trim();

    const orderButton = page.locator("button[routerlink*='myorders']");
    await orderButton.click();

    /*
      Orders table has no id-based selector, so we loop through every row's
      id column and match by text to find the one we just placed. Once we
      find the matching id, we click its "View" button to open that order's
      summary.
    */
    const idColumns = page.locator("th[scope='row']");
    await idColumns.first().waitFor();

    const idCounts = await idColumns.count();

    for(let i=0; i < idCounts;i++)
    {
       const textValueId = await idColumns.nth(i).textContent();
       if(textValueId === textIdOrder)
       {
            await page.locator("button.btn-primary").nth(i).click();
            break;
       }
    }
});

import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import messagePage from '../page-objects/message.page.js';
import checkoutPage from '../page-objects/checkout.page.js';
import signinPage from '../page-objects/signin.page.js';
import headerPage from '../page-objects/header.page.js';
import cartPage from '../page-objects/cart.page.js';


When('I click on a product', async function() {
    await productsPage.productTitle.click();
});

When('I select size and color', async function(){
    const sizeElement = await productPage.sizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getText();

    const colorElement = await productPage.colorButton;
    await colorElement.click();
    this.color = await colorElement.getAttribute('option-label');
});

When('I click the Add to Card button', async function() {
    this.productTitle = await productPage.productTitle.getText();
    this.productPrice = await productPage.productPrice.getText();

    await productPage.addToCartButton.click();
});

When('I see a message {string}', async function(message){
    await expect(messagePage.orderMessage).toHaveText(message);
});

When('I click the Proceed to Checkout button', async function(){
    await checkoutPage.proceedToCheckoutBtn.click();
});

When('I click on the final Proceed to Checkout button', async function(){
    await checkoutPage.finalProceedToCheckoutBtn.click();
});

Then('I should be prompted to create an account or sign in', async function(){
    // REVIEW: What is this? Where is the validation that user should sign in?
    // Why do you open signing page?
    // This step is not validating anything, so the whole test is kind of meaningless.
    await signinPage.open();
});

When('I click on the cart', async function(){
    // REVIEW: "I click" step should not validate values.
    // You should have created a separate "Then" step for such purpose
    // Also because of this validation this step can't be reused much.
    await expect(headerPage.counterNumber).toHaveText("1 product");
    await headerPage.cartButton.click();
});

Then('I click on the trush button', async function(){
    // REVIEW: Same problem as in "I click on the cart" step
    await cartPage.open();
    await cartPage.removeProduct();
    await expect(messagePage.removeMessage).toHaveText("Your shopping cart is empty.");  
});





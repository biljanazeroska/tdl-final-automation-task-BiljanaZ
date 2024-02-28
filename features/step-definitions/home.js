import { Given, When, Then } from '@wdio/cucumber-framework';
import { parseMenuExpression } from '../utils/utils.js';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I click on Dresses', async function() {
    const dressElement = await menuPage.dressesItem;
    await dressElement.click();
    this.dressText = await dressElement.getText();    
});





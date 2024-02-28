import { Given, When, Then } from '@wdio/cucumber-framework';
import searchPage from '../page-objects/search.page.js';
import listPage from '../page-objects/list.page.js';


When('I click on the search box', async function(){
    await searchPage.searchBox.click();
});

When('I type {string}', async function(input){
    const textField = await searchPage.searchBox;
    await textField.setValue('Blouse');  
});

When('I click on the search button', async function(){
    const searchButton = await searchPage.searchBtn;
    await searchButton.click();    
});

Then('I should see product list containing {string}', async function(input){    
    const productList = await listPage.productList;
    this.listPage = await productList.getText();
    await productList.getAttribute('option-label');
});
    

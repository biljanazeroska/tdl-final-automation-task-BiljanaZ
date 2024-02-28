import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get removeItemButton() { return $('a[title="Delete"] > .icon-trash'); } 
    
    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/index.php?controller=order');
          }

    async removeProduct() {
        await browser.waitUntil(async() => {
            try {
                await this.removeItemButton.click();
                return false;
            } catch {
                return true;
            }
        },{timeout: 30000});
    }
}

export default new CartPage();
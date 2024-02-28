import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MenuPage extends Page {
    get dressesItem(){ return $('//div[contains(@id, "block_top_menu")]/ul/li/a[contains(@title, "Dresses")]')};
    
}

export default new MenuPage();
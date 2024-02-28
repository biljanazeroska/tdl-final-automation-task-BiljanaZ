import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get cartButton() { return $('a[title="View my shopping cart"] > b'); }
    get counterNumber() { return $('span#summary_products_quantity'); }
}

export default new HeaderPage();
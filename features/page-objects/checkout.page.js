import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CheckoutPage extends Page {
    get proceedToCheckoutBtn() { return $('[title="Proceed to checkout"]');}
    get finalProceedToCheckoutBtn() {return $('div#center_column  a[title="Proceed to checkout"] > span');}
    }

export default new CheckoutPage();
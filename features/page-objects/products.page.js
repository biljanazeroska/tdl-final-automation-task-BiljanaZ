import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get productTitle() { return $('li:nth-of-type(2) .right-block [title="Printed Dress"]'); }
}

export default new ProductsPage();
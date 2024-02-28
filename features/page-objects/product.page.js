import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productTitle() { return $('#view_full_size [title]'); }
    get productPrice() { return $('[itemprop="price"]'); }
    get sizeButton() { return $('select#group_1'); }
    get colorButton() { return $('a[name="Pink"]'); }
    get addToCartButton() { return $('p#add_to_cart  span'); }
}

export default new ProductPage();
import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productTitle() { return $('#view_full_size [title]'); }
    get productPrice() { return $('[itemprop="price"]'); }
    get sizeButton() { return $('select#group_1'); }
    // REVIEW: A "color button" shouldn't be so specific about Pink color
    // Either parameterize it, or include "pink" in the name
    get colorButton() { return $('a[name="Pink"]'); }
    get addToCartButton() { return $('p#add_to_cart  span'); }
}

export default new ProductPage();
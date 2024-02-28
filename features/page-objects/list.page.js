import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ListPage extends Page {
    get productList() {return $('div#center_column > .page-heading.product-listing')}
    
}

export default new ListPage();
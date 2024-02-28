import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MessagePage extends Page {
    get orderMessage() { return $('.col-md-6.col-xs-12.layer_cart_product > h2'); }
    get removeMessage() { return $('div#center_column > .alert.alert-warning');}   
}
export default new MessagePage();


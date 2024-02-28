import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SignInPage extends Page {
    async open() {
        
        await browser.navigateTo('http://www.automationpractice.pl/index.php?controller=authentication&back=http%3A%2F%2Fwww.automationpractice.pl%2Findex.php%3Fcontroller%3Dorder%26step%3D1');
    }
}


export default new SignInPage();
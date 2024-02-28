import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchPage extends Page {
   get searchBox() { return $('input#search_query_top');}
   get searchBtn() { return $('.button-search');} 
   }

export default new SearchPage();
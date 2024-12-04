import { expect } from '@playwright/test';
import { BasePage } from "./base.page";

export class ResultPage extends BasePage {

    constructor (page) {
        super(page);
        this.searchResult = this.searchResult = this.page.getByPlaceholder('Что вы ищете?')
        this.articleResult = this.page.locator('[class="search__results search-results"]').first();
        this.currentUrl ='';
    }

    gettUrl() {
        return this.page.url();
    }


   }
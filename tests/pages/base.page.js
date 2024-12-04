import { expect } from '@playwright/test';
import { step } from "allure-js-commons"

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await step(`Открытие ${url}`, async () => {
            await this.page.goto(url);
        })
    }
}
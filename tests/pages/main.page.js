import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    constructor (page) {
        super (page);
        this.searchButton = this.page.getByLabel('Поиск');
        this.searchBox = this.page.getByPlaceholder('Что вы ищете?');
        this.searchBoxButton = this.page.locator('form').getByLabel('Поиск');

    }

    //Нажать на поиск
    async goToSearch () {
        await this.searchButton.click();
    }

    //Ввод в поле имени
    async fillandSearch (name) {
        await allure.step ("Поиск через главную страницу", async () => {
        await this.searchBox.click();
        await this.searchBox.fill(name);
        await this.searchBoxButton.click()
              });
    }
}
 import { test, expect } from '@playwright/test';
 import { App } from './pages';
 import * as allure from 'allure-js-commons';
 
 test('Пользователь может воспользоваться повторным поиском', async ({ page }) => {
    await allure.tags ("UI");
    const app = new App(page);
  
    await app.mainPage.open('/');
    await app.mainPage.goToSearch();
    await app.popupSearch.fillAndSearch ('Пушкин');
    await allure.step (" 'Пушкин' отобразился в списке статей ", async () => {
      await expect (app.resultPage.articleResult).toContainText('Пушкин');
   
    });
  
  
    await allure.step (" 'Пушкин' отобразился в плесхолдере", async () => {
      await expect(app.resultPage.searchResult).toHaveValue('Пушкин');
    });
  
  
  
    await allure.step ("'Пушкин' включен в url", async () => {
       expect (page.url()).toContain('query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD')
    });

    await app.mainPage.fillandSearch('Италия'); 
  
  
    await allure.step (" 'Италия' отобразился в списке статей", async () => {
      await expect (app.resultPage.articleResult).toContainText('Италия');
    });
  
  

    await allure.step (" 'Италия' отобразился в плесхолдере", async () => {
      await expect (app.resultPage.searchResult).toHaveValue('Италия');
    });
  
  
    await allure.step ("'Италия' включен в url", async () => {
     expect (page.url()).toContain('query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F')
    });
  
  });

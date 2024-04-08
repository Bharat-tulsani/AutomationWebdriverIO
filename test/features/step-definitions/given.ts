import { Given } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given(/^Login to inventory web app$/, async function () {
    //Login to inventory web app
    await browser.url("https://www.saucedemo.com/v1/index.html");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    await $(`#user-name`).setValue(`standard_user`);
    await $(`#password`).setValue(`secret_sauce`);
    await $(`#login-button`).click();
    await browser.pause(5000);

});
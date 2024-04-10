import { Given } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given(/^Login to inventory web app$/, async function () {
    //Login to inventory web app
    await browser.url("https://www.saucedemo.com/v1/index.html");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    try {
        await $(`#user-nam`).setValue(`standard_user`);
        await $(`#password`).setValue(`secret_sauce`);
        await $(`#login-button`).click();
    } catch (err) {
        console.log(`Error in first login.Retrying...`);
        await browser.refresh();
        await browser.pause(5000);
        await $(`#user-name`).setValue(`standard_user`);
        await $(`#password`).setValue(`secret_sauce`);
        await $(`#login-button`).click();
    }
    await browser.back();
    await browser.pause(3000);
    await browser.forward();
    await browser.pause(3000);


    //Login with another
    // await browser.reloadSession();
    // await browser.url("https://www.saucedemo.com/v1/index.html");
    // await $(`#user-name`).setValue(`problem_user`);
    // await $(`#password`).setValue(`secret_sauce`);
    // await $(`#login-button`).click();
    // await browser.pause(5000);

});
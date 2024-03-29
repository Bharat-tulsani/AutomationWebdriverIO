import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given(/^Google Page is open$/, async function () {
    await browser.url("https://www.google.com");
});

When(/Search with (.*)/, async function (SearchItem) {
    console.log(`searching for ${SearchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(SearchItem);
    await browser.keys("Enter");
});
Then(/^Click on the first search result$/, async function () {
    let ele = await $(`<h3>`);
    await ele.click();
    await browser.pause(5000);
});
Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
    console.log(`Expected Url: ${ExpectedUrl}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedUrl);
});

// Web Interactions
Given(/^A web page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/inputs");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
}
);
When(/^Perform web Interaction$/, async function () {
    // let ele = await $("input[type='number']");
    // await ele.setValue("12345");
    // await browser.pause(3000);



    // 1.Input box
    // Actions
    // i.Type into Input box
    // ii.Clear the field and type or just addvalue
    // iii.Click and Type
    // iv.slow typing

    let num = 123456;
    let strNum = num.toString();
    let ele = await $("input[type='number']");
    await ele.click();
    for (let i = 0; i < strNum.length; i++) {
        let charStr = strNum.charAt(i);
        await browser.pause(1000);
        await browser.keys(charStr);
    }
    await browser.debug();
});

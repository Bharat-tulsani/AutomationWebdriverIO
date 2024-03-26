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


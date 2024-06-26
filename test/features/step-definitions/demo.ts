import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given(/^Google Page is open$/, async function () {
    await browser.url("https://www.google.com");
    await browser.pause(5000);
    console.log(`>>Browser :${JSON.stringify(browser)}`);
});

When(/Search with (.*)/, async function (SearchItem) {
    console.log(`searching for ${SearchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(SearchItem);
    await browser.keys("Enter");
    console.log(`>>Element: ${JSON.stringify(ele)}`);
});
Then(/^Click on the first search result$/, async function () {
    let ele = await $(`<h3>`);
    await ele.click();
    await browser.pause(5000);
});
Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
    console.log(`Expected Url: ${ExpectedUrl}`);
    await browser.waitUntil(async () => {
        return (await browser.getTitle()) === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO";
    }, { timeout: 10000, interval: 500, timeoutMsg: `Failed loading WDIO web page :${await browser.getTitle}` });
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedUrl);
});

// Web Interactions
Given(/^A web page is opened$/, async function () {
    await browser.url("https://www.wwe.com/");
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

    // let num = 123456;
    // let strNum = num.toString();
    // let ele = await $("input[type='number']");
    // await ele.click();
    // for (let i = 0; i < strNum.length; i++) {
    //     let charStr = strNum.charAt(i);
    //     await browser.pause(1000);
    //     await browser.keys(charStr);
    // }
    // await browser.debug();

    // 2.Dropdown
    // Actions
    // i.Assert default option is selected
    // ii.Select by attribute ,text ,index
    // iii.get a list of options

    // let ele = await $(`//select/option[@selected='selected']`);
    // let val = await ele.getText();
    // chai.expect(val).to.equal("Please select an option");
    // await browser.debug();


    // Select a specific option
    // let ddEle = await $(`#dropdown`);
    // await ddEle.selectByVisibleText("Option 2");
    // await browser.debug();

    // let ddEle = await $(`#dropdown`);
    // await ddEle.selectByAttribute("value", "1");
    // await browser.debug();

    // let ddEle = await $(`#dropdown`);
    // await ddEle.selectByIndex(2);
    // await browser.debug();

    // let eleArr = await $$(`select>option`);
    // let arr = []
    // for (let i = 0; i < eleArr.length; i++) {
    //     let val = await eleArr[i].getText();
    //     arr.push(val);
    //     console.log(val);
    // }
    // console.log(`Array of options: ${arr}`);
    // await browser.debug();

    // Checkbox
    // Actions 
    // i)Select an option 
    // ii)Unselect an Option(if selected)
    // iii)Assert if option is selected 
    // iv)Select all options

    // let ele = await $(`//form[@id="checkboxes"]/input[1]`);
    // if (!(await ele.isSelected())) {
    //     await ele.click();
    // }
    // let ele = await $(`//form[@id="checkboxes"]/input[2]`);
    // let isChecked = await ele.isSelected();
    // chai.expect(isChecked).to.be.false;

    // await browser.pause(3000);

    // Open new Window 
    // (await $(`=Click Here`)).click();
    // (await $(`=Elemental Selenium`)).click();
    // let currentWinTitle = await browser.getTitle();
    // let parentWinHandle = await browser.getWindowHandle();
    // console.log(`Current Window Title: ${currentWinTitle}`);

    // //Switch to specific window
    // let winHandles = await browser.getWindowHandles();
    // for (let i = 0; i < winHandles.length; i++) {
    //     console.log(`Window Handle: ${winHandles[i]}`);
    //     await browser.switchToWindow(winHandles[i]);
    //     if (currentWinTitle === "Home | Elemental Selenium") {
    //         await browser.switchToWindow(winHandles[i]);
    //         let headerTxtEleSel = (await $(`<h1>`)).getText();
    //         console.log(`Header Text: ${headerTxtEleSel}`);
    //         break;
    //     }
    // }
    // //Switch back to parent window
    // await browser.switchToWindow(parentWinHandle);
    // let parentWinHeaderTxt = await $(`<h3>`).getText();
    // console.log(`>>parentWinHeaderTxt: ${parentWinHeaderTxt}`);
    // await browser.pause(9000);

    // Alert/Pop Up Windows
    // Methods Used
    // i)isAlertOpen
    // ii)acceptAlert
    // iii)dismissAlert
    // iv)getAlertText
    // v)sendAlertText

    // await $(`button=Click for JS Alert`).click();
    // if (await browser.isAlertOpen()) {
    //     console.log(`Alert is open`);
    //     await browser.acceptAlert();
    //     await browser.pause(5000);
    // }

    // await $(`button=Click for JS Confirm`).click();
    // if (await browser.isAlertOpen()) {
    //     console.log(`Alert is open`);
    //     await browser.dismissAlert();
    //     await browser.pause(5000);
    // }

    // await $(`button=Click for JS Prompt`).click();
    // if (await browser.isAlertOpen()) {
    //     let alertText = await browser.getAlertText();
    //     console.log(` Alert Text: ${alertText}`);
    //     await browser.sendAlertText("Hello World");
    //     await browser.acceptAlert();
    //     await browser.pause(5000);
    // }
    // (await $(`#file-upload`)).addValue(`${process.cwd()}/data/fileupload/Spider.jpg`);
    // await $(`#file-submit`).click();
    // await browser.debug();


    // frames 
    // await $(`=iFrame`).click();
    // let ele = await $(`#mce_0_ifr`);
    // await browser.switchToFrame(ele);
    // //Interaction with frame..
    // await $(`#tinymce`).click();
    // await browser.keys(["Meta", "A"]);
    // await browser.pause(1000);
    // await browser.keys("Delete");
    // await $(`#tinymce`).addValue(`Typing into a frame...`);
    // await browser.switchToParentFrame();
    // await browser.pause(5000);

    //basic scrolling
    // await browser.maximizeWindow();
    // await $(`//div[contains(text(), 'Best Deals on Smartphones')]`).scrollIntoView();

    // await browser.pause(3000);

    //Web Table Interactions
    // let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
    // chai.expect(rowCount).to.equal(4);
    // console.log(`Row Count: ${rowCount}`);
    // let colCount = await $$(`//table[@id="table1"]/thead/tr/th`);
    // chai.expect(colCount.length).to.equal(6);
    // console.log(`Column Count: ${colCount.length}`);

    // let arr = [];
    // for (let i = 0; i < rowCount; i++) {
    //     let personObj = {
    //         lastname: "",
    //         firstname: "",
    //         email: "",
    //         due: "",
    //         web: "",
    //     };
    //     for (let j = 0; j < colCount.length; j++) {
    //         let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
    //         let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
    //         if (firstname === "Jason") {
    //             if (j === 0) personObj.lastname = cellVal;
    //             if (j === 1) personObj.firstname = cellVal;
    //             if (j === 2) personObj.email = cellVal;
    //             if (j === 3) personObj.due = cellVal;
    //             if (j === 4) personObj.web = cellVal;
    //         }
    //     }
    //     if (personObj.firstname === "Jason") {
    //         arr.push(personObj);
    //     }
    // }
    // console.log(`Array of Person Objects: ${JSON.stringify(arr)}`);

    // Get Single Column
    // let arr = [];
    // for (let i = 0; i < rowCount; i++) {
    //     let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
    //     arr.push(cellVal);
    // }
    // console.log(`Single col values: ${arr}`);

    await browser.execute(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await browser.pause(3000);
    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight);
    });
    await browser.pause(3000);
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await browser.pause(3000);
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollTop);
    });
    await browser.pause(3000);
});

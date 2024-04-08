import { Then } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Then(/^Inventory page should list (.*)$/, async function (NumberOfProducts) {
    if (!NumberOfProducts) throw Error(`INVALID PRODUCT COUNT PROVIDED:${NumberOfProducts}`)
    let productCount = await $$(`.inventory_item_name`)
    chai.expect(productCount.length).to.equal(parseInt(NumberOfProducts));
})

Then(/^Validate all products have valid price$/, async function () {
    let eleArr = await $$(`.inventory_item_price`)
    let priceStrArr = []
    for (let i = 0; i < eleArr.length; i++) {
        priceStrArr.push(await eleArr[i].getText())
    }
    console.log(`>>Product with $: ${priceStrArr}`);

    let priceNumArr = priceStrArr.map(ele => +(ele.replace('$', '')));
    console.log(`>>Product with number: ${priceNumArr}`);

    let invalidPrice = priceNumArr.filter(ele => ele <= 0)
    chai.expect(invalidPrice.length).to.equal(0);
})



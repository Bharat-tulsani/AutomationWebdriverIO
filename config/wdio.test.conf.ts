import { config as baseConfig } from '../wdio.conf.js';
export const config = Object.assign(baseConfig, {
    //All environment specific configurations goes here
    environment: "test",
    sauseDemoUrl: "https://www.saucedemo.com/v1/index.html",
});
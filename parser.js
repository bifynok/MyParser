const puppeteer = require('puppeteer');

let PageLink = 'https://www.moyo.ua/ua/telecommunication/smart/?page=';

(async () => {
    let isListable = true;
    let receivedInfo = [];
    let pageCounter = 1;
    let browser;
    try{
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 100,
            devtools: true      
        })
    } catch (error) {
        console.log(error);
    }
})();

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

    let page = await browser.newPage()
    await page.setViewport({
      width: 1400, height: 900
    })

    await page.goto(`${PageLink}${pageCounter}`)
    await page.waitForSelector('ul.js-catalog-pagination')
    let lastPage = await page.evaluate(async () => {
        try {
            let elements = document.querySelectorAll('[data-page]');
            let lastElement = elements[elements.length - 1];
            let lastPageValue = lastElement.getAttribute('data-page'); 
            return lastPageValue;
        } catch (error) {
            console.log(error);
        }
    }, {waitUntil: 'ul.js-catalog-pagination'});

    while(isListable){
        await page.goto(`${PageLink}${pageCounter}`)
        await page.waitForSelector('ul.js-catalog-pagination')

        let getInfo = await page.evaluate(async () => {
            let productInfo = [];

            try{

            } catch (error) {
                console.log(error);
            }
        }, {waitUntil: 'ul.js-catalog-pagination'})
    }
    } catch (error) {
        console.log(error);
    }
})();

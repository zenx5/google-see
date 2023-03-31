import puppeteer, { Puppeteer, PuppeteerNode } from "puppeteer";

class GoogleSearchService extends PuppeteerNode{

    constructor( settings ){
        super(settings)
        this.nameScreenShot = settings.nameScreenShot;
        this.countScreenShot = 0;
        // ( async ()=>{
        //     this.browser = await puppeteer.launch()
        // })()
            // .then( browser => {
            //     console.log(browser)
            //     this.browser = browser
            // } )
        return this
    }

    async getScreentShot(nameScreenShot = null) {
        // if ( nameScreenShot ) {
        //     await this.page.screenshot({path:`output/${nameScreenShot}.jpg`})
        // } else {
        //     await this.page.screenshot({path:`output/${this.nameScreenShot}-${this.countScreenShot}.jpg`})
        //     this.countScreenShot += 1
        // }
    }

    async init() {
        this.browser = await this.launch()
    }

    async search(keyword) {
    //     // const page = await this.browser.newPage()
    //     // await page.goto("https://www.google.com/");

    }

}


const useGoogleSearch = async () => {
    const settings = {
        nameScreenShot: 'screenshot',
        isPuppeteerCore: false
    }
    const googleSearchService = new GoogleSearchService( settings )
    // await googleSearchService.init()
    return googleSearchService
}

export default useGoogleSearch;

//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();

//     await scrapping.page.goto("https://www.google.com/");
//     await scrapping.page.screenshot({path:"pic1.jpg"});


//     await scrapping.page.type('.gLFyf','panfleto');
//     await scrapping.page.screenshot({path:"pic2.jpg"});

//     await scrapping.page.click('#jZ2SBf');
//     await scrapping.page.waitForSelector('#search');

//     await scrapping.page.setViewport({width: 1080, height: 1024});

//     await scrapping.page.screenshot({path:"pic3.jpg"});

//    const links = await scrapping.page.evaluate(() => {
//         const elements = document.querySelectorAll('#search .yuRUbf a');
//         const links = []
//         for (const e of elements) {
//             links.push(e.href)
//         }
//         return links
//     });

//    for (let link of links) {
//       await scrapping.page.goto(link);
//    }

//     await scrapping.browser.close();

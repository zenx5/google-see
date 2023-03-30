const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://www.google.com/");
    await page.screenshot({path:"pic1.jpg"});


    await page.type('.gLFyf','panfleto');
    await page.screenshot({path:"pic2.jpg"});

    await page.click('#jZ2SBf');
    await page.waitForSelector('#search');

    await page.setViewport({width: 1080, height: 1024});

    await page.screenshot({path:"pic3.jpg"});
    
   const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('#search .yuRUbf a');
        const links = []
        for (const e of elements) {
            links.push(e.href)
        }
        return links
    });

   for (let enlace of enlaces) {
      await page.goto(enlace);
   }

    await browser.close();
}) ();
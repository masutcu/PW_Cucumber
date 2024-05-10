
import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from "playwright"
import dotenv from "dotenv"



let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

BeforeAll(async function () {
    
    dotenv.config();

    let browserType = process.env.browser;
    
    switch (browserType) {
        case 'chrome':
        case 'gc':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] })
            break;
        case 'firefox':
        case 'ff':
            browser = await firefox.launch({ headless: false,  args: ['--start-maximized'] })
            break;
        case 'safari':
            browser = await webkit.launch({ headless: false,  args: ['--start-maximized'] })
            break;
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] })
            break;
        default:
            throw new Error(`SORUN BURADA: invalid browser type ${browserType}  is passed.. pls correct it.. `)

    }

})


Before(async  () => {

    bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true })
    page = await bCtx.newPage()
    
})
After(async function (scenario) {
    await page.close()
    await bCtx.close()
    console.log(`Scenario Status is  >>>>>>>> ${scenario.result?.status} >>>>>> `)
   
})
 
AfterAll(async function () {
    await browser.close()
})

export { page };

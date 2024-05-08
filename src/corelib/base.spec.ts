
import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "playwright"
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
            browser = await chromium.launch({ headless: false, channel: "firefox", args: ['--start-maximized'] })
            break;
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] })
            break;
        default:
            throw new Error(`invalid browser type ${browserType}  is passed.. pls correct it.. `)

    }

})


Before(async () => {

    bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true })
    page = await bCtx.newPage()
})
After(async function () {
    await page.close()
    await bCtx.close()

})

AfterAll(async function () {
    await browser.close()
})

export { page };

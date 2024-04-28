
import { Before, After } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "playwright"



let browser: Browser;
let bCtx: BrowserContext;
let page: Page;


Before(async () => {
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] })
    bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true })
    page = await bCtx.newPage()
})
After(async function () {
    await page.close()
    await bCtx.close()
    await browser.close()
})

export{page};

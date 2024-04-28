import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "playwright"

setDefaultTimeout(1000 * 60 * 2)

Given('User is on home page',  async function () {
  let browser: Browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] })
  let bCtx: BrowserContext= await browser.newContext({ viewport: null, javaScriptEnabled: true })
  let page: Page = await bCtx.newPage()
  await page.goto('https://www.youtube.com/channel/UCvdwBNGarxKkZLBZzJVCHIA')
  await page.close()
  await browser.close()
});

When('User enter login details',   function () {
  console.log('*******User enter login details******')
});

Then('Login should be successfull', function () {
  console.log(',,,,,,,Login should be successfull,,,,,,,,,,,')
});

Then('Home page should be displayed',  function () {
  console.log('---------User is on home page--------')
})

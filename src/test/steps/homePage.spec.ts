import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"

import {page} from "../../corelib/base.spec"


setDefaultTimeout(1000 * 60 * 2)

Given('User is on home page',  async function () {
  
  await page.goto('https://www.youtube.com/channel/UCvdwBNGarxKkZLBZzJVCHIA')
  
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

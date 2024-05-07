
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import {page} from "../../corelib/base.spec"
import { expect } from "@playwright/test"
import { faker } from '@faker-js/faker'
import  HomePage  from "../pages/homepage"
import * as locate from "../locator/homepagelocator.json"

//Bu sayfada POM kullanılmadı
setDefaultTimeout(1000 * 60 * 2)
let homePage:HomePage;
let randomName: string;
let randomEmail: string;

When('Navigate to url {string}', async function (url) {
    homePage = new HomePage(page) //burada pom e göre uyarladık
    await homePage.navigateToApp()
    //await page.goto(url);
});



Then('Verify that home page is visible successfully', async function () {
    const title = await page.title();
    console.log("Sayfa Başlığı:", title);
    await expect(page).toHaveTitle(/Automation Exercise/);
});



Then('Click on Signup-Login button', async function () {
    const myElement=locate.signUpLoginLink.locator as "alert"|"alertdialog"|"application"|"article"|"banner"|"blockquote"|"button"|"caption"|"cell"|"checkbox"|"code"|"columnheader"|"combobox"|"complementary"|"contentinfo"|"definition"|"deletion"|"dialog"|"directory"|"document"|"emphasis"|"feed"|"figure"|"form"|"generic"|"grid"|"gridcell"|"group"|"heading"|"img"|"insertion"|"link"|"list"|"listbox"|"listitem"|"log"|"main"|"marquee"|"math"|"meter"|"menu"|"menubar"|"menuitem"|"menuitemcheckbox"|"menuitemradio"|"navigation"|"none"|"note"|"option"|"paragraph"|"presentation"|"progressbar"|"radio"|"radiogroup"|"region"|"row"|"rowgroup"|"rowheader"|"scrollbar"|"search"|"searchbox"|"separator"|"slider"|"spinbutton"|"status"|"strong"|"subscript"|"superscript"|"switch"|"tab"|"table"|"tablist"|"tabpanel"|"term"|"textbox"|"time"|"timer"|"toolbar"|"tooltip"|"tree"|"treegrid"|"treeitem"
    await page.getByRole(myElement, locate.signUpLoginLink.actionOptions).click()  //locate classdan çektik.
});


Then('Enter name and email address', async function () {

    randomName = faker.person.fullName()
    console.log(randomName)
    //farklı kullanımlar
    //const randomFullName1 = faker.person.fullName({ firstName: 'Ali' })//ismi ali olsun soy isim değişik
    //const randomFullName2 = faker.person.fullName({ sex: 'female' })//cinsiyet hep bayan
    //const randomFullName3 = faker.person.fullName({ lastName: 'SUTCU', sex: 'male' })//soyismi sutcu olan erkek olsun
    randomEmail = `${randomName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    console.log('randomEmail', randomEmail)


    const singUpForm = page.locator('.signup-form').first()
    await singUpForm.getByPlaceholder('Name').pressSequentially(randomName, { delay: 100 })
    await singUpForm.getByPlaceholder('Email Address').fill(randomEmail)


});



Then('Click {string} button', async function (arg0) {

    if (arg0 === "Signup") {
        await page.locator('[data-qa="signup-button"]').click()
    } else if (arg0 === "Login") {
        await page.locator('[data-qa="login-button"]').click()
    } else if (arg0 === "Logout") {
        await page.getByRole('link',{name:'Logout'}).click()
    } else {
        console.log("Locate tanımlaması yanlış.");
    }

});



Then('Verify that ENTER ACCOUNT INFORMATION is visible', async function () {
    await expect(page.getByRole('heading', { name: 'Account Information' })).toBeVisible()
});



Then('Fill details: Title, Name, Email, Password, Date of birth', async function () {
    //9. Fill details: Title, Name, Email, Password, Date of birth     
    const loginForm = page.locator('.login-form')
    //radio button
    await loginForm.getByRole('radio', { name: 'Mr.' }).first().check()
    //password alanı dolduruyoruz
    await loginForm.getByRole('textbox', { name: "Password" }).pressSequentially("Istanbul1453", { delay: 100 })

    //dropdown
    //page.locator('#days').click()
    const days = loginForm.locator('#days')
    await days.selectOption('13')
    const month = loginForm.locator('#months')
    await month.selectOption('August')
    const year = loginForm.locator('#years')
    await year.selectOption('1990')

});



Then('Select checkbox {string}', async function (arg1) {
    if (arg1 === "Sign up for our newsletter!") {
        await page.getByRole('checkbox', { name: "newsletter" }).click()
    } else if (arg1 === "Receive special offers from our partners!") {
        await page.locator("#optin").click()
    } else {
        console.log("Locate tanımlaması yanlış.");
    }

});


Then('Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', async function () {
    let loginForm = page.locator('.login-form')
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await loginForm.locator('#first_name').fill('mehmet')
    await loginForm.locator('#last_name').fill('sutcu')
    await loginForm.locator('#company').fill('IBM')
    await loginForm.locator('#address1').fill('Rose Strret')
    await loginForm.locator('#address2').fill('California')

    //country dropdown
    const country = loginForm.locator('#country')
    await country.selectOption('United States')

    await loginForm.locator('#state').fill('California')
    await loginForm.locator('#city').fill('San Francisco')
    await loginForm.locator('#zipcode').fill('94102')
    await loginForm.locator('#mobile_number').fill('+1 415-239-5065')
});



Then('Click Create Account button', async function () {
    await page.getByRole('button', { name: 'Create Account' }).click()
});



Then('Verify that ACCOUNT CREATED! is visible', async function () {
    await expect(page.getByRole('heading', { name: "Account Created!" })).toBeVisible()

});



Then('Click Continue button', async function () {

    await page.getByRole('link', { name: 'Continue' }).click()
});



Then('Verify that Logged in as username is visible', async function () {
    await expect(page.getByText(' Logged in as ')).toBeVisible
    await expect(page.getByText(randomName)).toBeVisible
});


Then('Click Delete Account button', async function () {
    await page.getByRole('link', { name: 'Delete Account' }).click()
});



Then('Verify that ACCOUNT DELETED! is visible and click {string} button', async function (string) {
    await expect(page.getByRole('heading', { name: "Account Deleted!" })).toBeVisible()

});



Then('Verify {string} is visible', async function (arg0) {
            if (arg0 === "New User Signup!") {
                await expect(page.getByRole('heading', { name: "New User Signup!" })).toBeVisible()
            } else if (arg0 === "Login to your account") {
                await expect(page.getByRole('heading', { name: "Login to your account" })).toBeVisible()
            } else {
                console.log("Locate tanımlaması yanlış.");
            }
            
            
});

 

Then('Enter correct email address and password', async function () {

            await page.getByPlaceholder('Email Address').first().fill('JulianSUTCU148@test.com')
            await page.getByPlaceholder('Password').first().fill('Istanbul1453')
          
});

Then('Verify that user is navigated to login page', async function () {
            await expect(page).toHaveTitle(/Login/)
});
 





import {Page} from "playwright";

export default class HomePage {
    private page:Page;
    
    constructor(page:Page){
        this.page=page;
    }
    async  navigateToApp() {
        await this.page.goto("http://automationexercise.com")       
    }
}
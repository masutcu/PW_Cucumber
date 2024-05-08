import {Page} from "playwright";
import dotenv from "dotenv"

dotenv.config();
export default class HomePage {
    private page:Page;
    
    constructor(page:Page){
        this.page=page;
    }
    async  navigateToApp() {
        await this.page.goto(process.env.base_url!)       
    }
}
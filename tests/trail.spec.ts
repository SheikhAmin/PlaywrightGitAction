import {test,expect,Page} from "@playwright/test"
import Fn from "../Pom/fn";



test.describe("try",()=>{
    test("first test case",async({page})=>{
        await page.goto("https://exam.bdjobs.com/dummyExam/signin.asp");
        await page.locator("#loginid").fill("24575");
        await page.locator("#password").fill("123");
        await page.locator("#btnsubmit").click();
        await page.waitForTimeout(6000);
        await page.locator("#exmlink").click();
        await page.waitForTimeout(6000);
        await page.locator('.btn').click();
        await page.pause();
    })
    test.only('visit', async ({page})=>{
  
        const func = new Fn();
        await func.readData(page as any);
        //func.readData();
    })
})
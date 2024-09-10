import { Page } from 'playwright';
import { readExcelData } from './excel'; // Adjust path as needed

class Fn {
    
  async readData(page: Page) {
    const filePath = 'Data\loginData.xlsx'; // Update path to your Excel file
    const data = await readExcelData(filePath);
    const [headers, ...rows] = data;

    if (rows.length === 0) {
      console.log('No Credentials found in Excel sheet');
      return;
    }

    for (let i = 0; i < rows.length; i++) {
      const [username, password] = rows[i];
      if (!username.trim() || !password.trim()) {
        console.log('Reached the End of Excel Sheet!');
        return;
      }

      await page.goto('https://recruiter.bdjobs.com/'); // Adjust URL if needed

      await page.fill('input[name="username"]', username);
      await page.fill('input[name="password"]', password);
      await page.click('button[type="submit"]');

      await page.waitForTimeout(6000); // Wait for 6 seconds

      const body = await page.content(); // Get the page content

      if (body.includes('#dropdownBasic1')) {
        await page.click('#dropdownBasic1');
        await page.click('.col > .dropdown > .dropdown-menu > button.dropdown-item');
        await page.waitForTimeout(6000); // Wait for 6 seconds
      } else {
        await page.waitForTimeout(6000); // Wait for 6 seconds
        console.log(`Invalid Credentials! Username: ${username}, Password: ${password}`);
      }
    }
  }
}

export default Fn;

const { test, expect } = require('@playwright/test');

test('Checks that duckduckGo page can be opened', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  const islogovisible = await page.isVisible('#logo_homepage_link');
  expect(islogovisible).toBe(true);
});

test('Checks that results page opens and is correct', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "Test");
    await page.click('#search_button_homepage');
    const rezultatas = await page.textContent('#r1-0');
    console.log(rezultatas);
    expect(rezultatas).toContain('Test');
  });

  test('Inspector demo', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.fill('input[name="q"]', 'Test');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://duckduckgo.com/?q=Test&ia=web' }*/),
        page.click('input:has-text("S")')
    ]);
    const rezultatas2 = await page.textContent('#r1-0');
    expect(rezultatas2).toContain('Test');
  });

  test('Checks microsoft cheat sheet', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "microsoft word cheat sheet");
    await page.click('#search_button_homepage');
    const microsoftWord = await page.textContent('h3.c-base__title')
    const cheatSheet = await page.textContent('a.zcm__link.js-zci-link.js-zci-link--cheat_sheets.is-active')
    expect(microsoftWord).toContain('Microsoft Word 2010');
    expect(cheatSheet).toContain('Cheat Sheet');
  });

  test('Checks Shorten link', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "shorten www.wikipedia.com");
    await page.click('#search_button_homepage');
    const shortenUrl = await page.inputValue('#shorten-url');
    await page.goto(shortenUrl);
    const webPage = page.url();
    expect(webPage).toBe('https://www.wikipedia.org/');
   });

   test('panda', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
  await page.waitForSelector("#search_form_input_homepage");
  await page.fill('#search_form_input_homepage', "intitle:panda");
  await page.click("#search_button_homepage", { force: true });
  await page.waitForNavigation();
      const results = await page.evaluate(() => Array.from(document.querySelectorAll('.result__title'), element => element.textContent));
      console.log(results);
  results.forEach(result => {
    expect(result.toLowerCase()).toContain("panda");
  });
});
 
const passwordsLengths = [8, 16, 64];
    passwordsLengths.forEach(passwordLength => {
    test(`Generate ${passwordLength} chracters long password`, async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector("#search_form_input_homepage");
        await page.fill('#search_form_input_homepage', ("password " + passwordLength));
        await page.click("#search_button_homepage");
        const generatedPassword = await page.textContent(".c-base__title");
        expect(generatedPassword.length).toEqual(passwordLength)
    });
  });

  const passwordsLengths2 = ['7', '65'];
    passwordsLengths2.forEach(passwordLength2 => {
    test(`Test if  ${passwordLength2} characters does not generate password`, async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector("#search_form_input_homepage");
        await page.fill('#search_form_input_homepage', ("password " + passwordLength2));
        await page.click("#search_button_homepage");
        const generatedPassword2 = await page.isVisible(".c-base__title");
        expect(generatedPassword2).toBe(false);
    });
  });
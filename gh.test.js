let page;

afterEach(() => {                                   //Глобальный хук применяемый для всех тестов
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {                          //Глобальный хук применяемый для всех тестов
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  }, 20000);
});

describe("Netology page tests", () => {
  beforeEach(async () => {                          
    page = await browser.newPage();
    await page.goto("https://netology.ru");
  }, 100000);

  test("Netology page should load", async () => {
    const element = await page.waitForXPath('/html/head/title');
    const value = await element.evaluate(el => el.textContent, element);
    expect(value).toMatch('Нетология — обучение современным профессиям онлайн');
  }, 30000);

  test("Сlick on study free link", async () => {
    const studyFreeLink = await page.waitForXPath('//*[@id="app"]/div[4]/section/div[1]/header/div[2]/a');
    await studyFreeLink.click();
    await page.waitForSelector('h1', {timeout: 15000});
    const actual = await page.title();
    expect(actual).toMatch("Бесплатные онлайн курсы, вебинары и гайды – обучение в Нетологии");
  }, 20000);

  test("Сlick on SupportIcon", async () => {
    const supportIcon = await page.waitForXPath('//*[@id="app"]/div[6]');
    await supportIcon.click();
    const element = await page.waitForXPath('//*[@id="app"]/div[3]/div/div/div[2]/div[2]/div/div/div[1]/div/div/span');
    const actual = await element.evaluate(el => el.textContent);
    expect(actual).toMatch('Поддержка')
  }, 20000);
});
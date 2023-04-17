let page;

beforeEach(async () => {                          //Глобальный хук применяемый для всех тестов
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {                                 //Глобальный хук применяемый для всех тестов
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(45000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(45000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(45000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  });
});

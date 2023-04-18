let page;

afterEach(() => {                                   //Глобальный хук применяемый для всех тестов
  page.close();
});

// describe("Github page tests", () => {
//   beforeEach(async () => {                          //Глобальный хук применяемый для всех тестов
//     page = await browser.newPage();
//     await page.goto("https://github.com/team");
//   });

//   test("The h1 header content'", async () => {
//     await page.setDefaultTimeout(20000);
//     const firstLink = await page.$("header div div a");
//     await firstLink.click();
//     await page.waitForSelector('h1');
//     const title2 = await page.title();
//     expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
//   });

//   test("The first link attribute", async () => {
//     await page.setDefaultTimeout(15000);
//     const actual = await page.$eval("a", link => link.getAttribute('href') );
//     expect(actual).toEqual("#start-of-content");
//   });

//   test("The page contains Sign in button", async () => {
//     await page.setDefaultTimeout(10000);
//     const btnSelector = ".btn-large-mktg.btn-mktg";
//     await page.waitForSelector(btnSelector, {
//       visible: true,
//     });
//     const actual = await page.$eval(btnSelector, link => link.textContent);
//     expect(actual).toMatch("Get started with Team")
//   });
// });

describe("Netology page tests", () => {
  beforeEach(async () => {                          
    page = await browser.newPage();
    await page.goto("https://netology.ru");
  }, 60000);

  test("Сlick on the link", async () => {
    const studyFreeLink = await page.waitForXPath('//*[@id="app"]/div[4]/section/div[1]/header/div[1]/div[2]/div/div/a[1]');
    await studyFreeLink.click();
    await page.waitForSelector('h1', {timeout: 10000});
    const actual = await page.title();
    expect(actual).toMatch("Бесплатные онлайн курсы, вебинары и гайды – обучение в Нетологии");
  });

  test("The page contains link go to the full catalog of courses", async () => {
    await page.setDefaultTimeout(10000);
    const fullCatalogLink = '//*[@id="directions"]/div[2]';
    await page.waitForXPath(fullCatalogLink, {
      visble: true,
    });
    const actual = await page.$eval(fullCatalogLink, link => link.textContent);
    expect(actual).toMatch('Полный каталог');
  });

  // test("", async () => {});
});
// tests/task1.test.js
const puppeteer = require('puppeteer');

describe('Task 1 - Відображення користувачів', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/');
    await page.waitForTimeout(3000); 
  }, 15000); 

  afterAll(async () => {
    await browser.close();
  });

  test('елемент .usersList присутній на сторінці', async () => {
    const userList = await page.$('.usersList');
    expect(userList).not.toBeNull();
  });

  test('список містить хоча б одного користувача', async () => {
    const userItems = await page.$$('.usersList li');
    expect(userItems.length).toBeGreaterThan(0);
  });

}, 20000); 
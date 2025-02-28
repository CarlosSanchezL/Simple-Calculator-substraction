const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Division Test', function() {
  this.timeout(30000);
  let driver;

  beforeEach(async function() {
    let options = new chrome.Options();
    options.addArguments('headless'); 
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('should divide correctly', async function() {
    await driver.get("http://localhost:8080/");
    await driver.findElement(By.id("num1")).sendKeys("10");
    await driver.findElement(By.id("num2")).sendKeys("2");
    await driver.findElement(By.id("divideButton")).click();
    const result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, 'Result: 5');
  });
});

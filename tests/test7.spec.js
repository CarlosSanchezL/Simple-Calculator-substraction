const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Complete Operations Test', function() {
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

  it('should execute various operations in sequence', async function() {
    await driver.get("http://localhost:8080/");
    await driver.findElement(By.id("num1")).sendKeys("4");
    await driver.findElement(By.id("num2")).sendKeys("2");
    await driver.findElement(By.id("addButton")).click();
    await driver.findElement(By.id("multiplyButton")).click();
    await driver.findElement(By.id("subtractButton")).click();
    await driver.findElement(By.id("divideButton")).click();
    const result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, 'Result: 1');
  });
});

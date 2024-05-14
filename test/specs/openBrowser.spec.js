const assert = require('assert')

describe('Open Sauce Demo',() =>{
  it('should open browser dan redirect to saucedemo.com', async () =>{
    //buka browser dan url
    await browser.url('/')

    //assert
    //url udah benar/ blm
    const currentURL = await browser.getUrl();
    const expectedURL = 'https://www.saucedemo.com/';

   // await assert.strictEqual(currentURL, expectedURL, 'URL tidak sesuai. Actual : ${currentURL}, Expected : ${expectedURL}');
    await assert.strictEqual(currentURL, expectedURL, `URL tidak sesuai. Actual : ${currentURL}, Expected : ${expectedURL}`);


})



})
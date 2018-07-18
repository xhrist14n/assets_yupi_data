module.exports = {
    beforeEach: function(browser, done) {
        browser.deleteCookies().url('http://localhost:8000/tests/binding.test.html');
        global.staticServer.start(done);
    },

    afterEach: function(browser, done) {
        browser.deleteCookies().end(done);
        global.staticServer.stop();
    },

    binding: function(browser) {
        browser.waitForElementPresent('body');
        browser.waitForElementPresent('test-binding');
        browser.waitForElementPresent('h1');
        browser.waitForElementPresent('h2');
        browser.assert.containsText('h1', 'Hello, eavichay');
        browser.assert.containsText('h2', 'yahcivae');
        browser.assert.attributeEquals('#check-prop', 'attr', 'eavichay');
        browser.assert.attributeEquals('#check-prop', 'nested-value', '1');
        browser.assert.attributeEquals('#check-method', 'attr', 'yahcivae');
        browser.assert.attributeEquals('#check-method', 'nested-value', 'olleh');
        browser.assert.attributeEquals('#check-method', 'multi', '*eavichay*hello*');
        browser.click('h1');
        browser.assert.containsText('h1', 'Hello, slim.js');
        browser.assert.containsText('h2', 'sj.mils');
        browser.assert.attributeEquals('#check-prop', 'attr', 'slim.js');
        browser.assert.attributeEquals('#check-method', 'attr', 'sj.mils');
        browser.assert.containsText('#check-undefined-method', '{{undefinedMethod(prop)}}');
        browser.assert.attributeEquals('#check-method', 'multi', '*slim.js*hello*');
        browser.execute(`
            window.unit.myName = 'test';
        `);
        browser.assert.containsText('h1', 'Hello, test');
        browser.assert.containsText('h2', 'tset');
        browser.assert.attributeEquals('#check-prop', 'attr', 'test');
        browser.assert.attributeEquals('#check-method', 'attr', 'tset');
        browser.assert.containsText('#check-undefined-method', '{{undefinedMethod(prop)}}');
      browser.assert.attributeEquals('#check-method', 'multi', '*test*hello*');


    }
};
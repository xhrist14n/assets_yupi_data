module.exports = {
    beforeEach: function(browser, done) {
        browser.deleteCookies().url('http://localhost:8000/tests/repeater.test.html');
        global.staticServer.start(done);
    },

    afterEach: function(browser, done) {
        browser.deleteCookies().end(done);
        global.staticServer.stop();
    },

    repeater: function(browser) {
        browser.waitForElementPresent('body');
        browser.waitForElementPresent('repeater-test');

        browser.waitForElementPresent('select');
        browser.waitForElementPresent('option[value="text 0"]');
        browser.waitForElementPresent('option[value="text 1"]');
        browser.waitForElementPresent('option[value="text 2"]');

        browser.assert.containsText('h2', 'text 0');
        browser.click('select');
        browser.click('option[value="text 2"]');
        browser.assert.containsText('h2', 'text 2');
        browser.waitForElementPresent('ul');
        browser.assert.containsText('li[iteration="0"]', "item 0");
        browser.assert.containsText('li[iteration="1"]', "item 1");
        browser.assert.containsText('li[iteration="2"]', "item 2");
        browser.assert.containsText('repeater-child span[prop="item 0"]', "text 0");
        browser.assert.containsText('repeater-child span[prop="item 1"]', "text 1");
        browser.assert.containsText('repeater-child span[prop="item 2"]', "text 2");
        browser.waitForElementNotPresent('li[iteration="3"]');
        browser.waitForElementNotPresent('repeater-child span[prop="item 3"]');
        browser.execute(`
            window.unit.addOne();
            window.unit.items = window.unit.items.concat()
        `);
        browser.waitForElementPresent('li[iteration="3"]');
        browser.assert.containsText('li[iteration="3"]', "item 3");
        browser.assert.containsText('repeater-child span[prop="item 3"]', "text 3");
        browser.execute(`
            window.unit.items.pop()
            window.unit.items = window.unit.items.concat()
        `);
        browser.assert.containsText('li[iteration="0"]', "item 0");
        browser.assert.containsText('li[iteration="1"]', "item 1");
        browser.assert.containsText('li[iteration="2"]', "item 2");
        browser.assert.containsText('repeater-child span[prop="item 0"]', "text 0");
        browser.assert.containsText('repeater-child span[prop="item 1"]', "text 1");
        browser.assert.containsText('repeater-child span[prop="item 2"]', "text 2");
        browser.waitForElementNotPresent('li[iteration="3"]');
        browser.waitForElementNotPresent('repeater-child span[prop="item 3"]');
    }
};
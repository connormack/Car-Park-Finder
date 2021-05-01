const assert = require('assert');
process.env.NODE_ENV = 'test';
const main = require('../main');

describe("UC2", function () {

    it("should pass this test", function () {
        assert.strictEqual(main.app.get("view engine"), 'ejs');
    });

    after(function(){
        main.connection.end();
    });
});
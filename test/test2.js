/* Unit test to ensure the application uses 
the appropiate view engine - UC3 */

/* Initializing the test environment - requiring Mocha 'assert' library 
and indicating test environment before requiring and running main*/
const assert = require('assert');
process.env.NODE_ENV = 'test';
const main = require('../main');

//Defining test case as a callback
describe("UC3 - check view engine", function () {

    it("should pass this test", function () {
        assert.strictEqual(main.app.get("view engine"), 'ejs');     //Getting properties of the server
    });

}); 
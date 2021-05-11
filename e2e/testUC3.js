/* Automated, asynchronus E2E tests to emulate 
user actions based on the user scenario of UC3 */

import { Selector } from 'testcafe';

fixture`UC3 E2E tests`
    .page`http://localhost:8080/index.html`
    .clientScripts({
        //content injected into every page stubs out getCurrentPosition()
        content: `navigator.geolocation.getCurrentPosition = function(fn) {
            fn({ coords: { latitude: 51.454514, longitude: -2.587910 }, timestamp: Date.now() })
        };`
    })

//E2E test replicating the user actions of finding the nearest free car park, starting from the main page
test('Display the nearest free carpark as a table (UC3T1)', async function (t) {
    await t
        .click('#find-type')
        .click('#free')
        .click('#find-nearest')
        .click('#nearest')
        .expect(Selector('table > tbody').childElementCount).eql(1);   
});

//E2E test replicating the user actions of displaying all the free car parks of Bristol on the map
test('Display free car parks on the map (UC3T2)', async function (t) {
    await t
        .click('#find-type')
        .click('#free')
        .click('#display-result-on-map')
        .expect(Selector('#markerCount').value).eql('24');   
});
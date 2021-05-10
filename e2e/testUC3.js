import { Selector } from 'testcafe';

fixture`UC3 E2E tests`
    .page`http://localhost:8080/index.html`
    .clientScripts({
        //content injected into every page stubs out getCurrentPosition()
        content: `navigator.geolocation.getCurrentPosition = function(fn) {
            fn({ coords: { latitude: 51.454514, longitude: -2.587910 }, timestamp: Date.now() })
        };`
    })


test('some test', async function (t) {
    await t
        .click('#find-type')
        .click('#free')
        .click('#find-nearest')
        .click('#nearest')
        .expect(Selector('table > tbody').childElementCount).eql(1);   
});

test('some test', async function (t) {
    await t
        .click('#find-type')
        .click('#free')
        .click('#display-result-on-map')
        .expect(Selector('#markerCount').value).eql('24');   
});
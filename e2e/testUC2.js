import {Selector} from 'testcafe';

fixture `UC2: E2E tests`
.page `http://localhost:8080/index.html` 
.clientScripts({
    content: `navigator.geolocation.getCurrentPosition = function(fn){
        fn({coords:{latitude: 51.454514, longitude: -2.587910}, timestamp: Date.now})
    };`
});


test('type test', async function(t) {
    await t
    .click('#Find-type')
    .click('#Free')
});

 //.expect(Selector('table > tbody').childElementCount).eql(24);


test('map test', async function(t) {
    await t
    .click('#Bristol-Car-Park-Map')
    .expect(Selector('#markerCount').value).eql('57');
});
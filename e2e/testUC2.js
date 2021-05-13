import {Selector} from 'testcafe';

fixture `UC2: E2E tests`
.page `http://localhost:8080/index.html` 
.clientScripts({
    content: `navigator.geolocation.getCurrentPosition = function(fn){
        fn({coords:{latitude: 51.454514, longitude: -2.587910}, timestamp: Date.now})
    };`
});

test('Display Map with all car parks shown (UC2T1)', async function(t) {
    await t
    .click('#Bristol-Car-Park-Map')
    .expect(Selector('#markerCount').value).eql('57');
});
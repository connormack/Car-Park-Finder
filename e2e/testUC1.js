import { Selector } from 'testcafe';
fixture `UC1 E2E tests`.page `http://localhost:8080/index.html`;

//Test the end to end from the index page to viewing all car parks in a table
test('show all car parks in a table (UC1T1)', async function(t) {
    await t
    .click('#location-table')
    .click('#All-car-parks')
    .expect(Selector('table > tbody').childElementCount).eql(57);
});

//Test the end to end from index to table of car parks in Central Area
test('show car parks in central area (UC1T2)', async function(t) {
    await t
    .click('#location-table')
    .click('#dropdown-menu')
    .click(Selector('#dropdown-menu > option')
    .filter('[value="Central Area"]'))
    .expect(Selector('table > tbody').childElementCount).eql(13);
    
});
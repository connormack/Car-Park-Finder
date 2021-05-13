# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.
Test Runs



The tests are grouped according to the use-cases they represent. All the use-case and their tests are listed below:

### UC1: View car parks in a chosen area or all car parks in Bristol.
For this use-case, two end-to-end tests are performed. The test file containing both tests (testUC1.js) is located in the e2e folder in the directory. The prerequisite for running both the tests are that the testcafe tool must be installed and the server must be running in the background.
- (UC1T1) verifies if clicking the 'view all car parks' button results in a table with information of all the car parks in Bristol(57). 
- (UC1T2) verifies if choosing one of the areas (central area), to view the car parks in that area, result in the correct number of car parks displayed in the table(13).
- (UC2T1) E2E test - testing the correct amount of car parks (57) displayed on the map.

### UC3: Find nearest free of charge car park in Bristol.

Requirements traceability matrix, describing each of the executed tests and their current status:


| Use-Case ID | Requirement ID | Test Case | Status |
|  ------ | -------------- | --------- | ------ |
| testUC1 |     FR7        | UC1T1     | Pass   |
| testUC1 |  FR2 and FR3   | UC1T2     | Pass   |
|  ------ | -------------- | --------- | ------ |
| testUC2 |     FR6        |    UC2T1  |  Pass  |
|  ------ | -------------- | --------- | ------ |
| testUC3 | -------------- | --------- |  Pass  |
| testUC3 | -------------- | --------- |  Pass  |
| testUC3 | -------------- | --------- |  Pass  |




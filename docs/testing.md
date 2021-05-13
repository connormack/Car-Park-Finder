# Testing

## Test Plan


The tests are grouped according to the use-cases they represent. All the use-case and their tests are listed below:

### UC1: View car parks in a chosen area or all car parks in Bristol.
For this use-case, two end-to-end tests are performed. The test file containing both tests (testUC1.js) is located in the e2e folder in the directory. The prerequisite for running both the tests are that the testcafe tool must be installed and the server must be running in the background.
- (UC1T1) verifies if clicking the 'view all car parks' button results in a table with information of all the car parks in Bristol(57). 
- (UC1T2) verifies if choosing one of the areas (central area), to view the car parks in that area, result in the correct number of car parks displayed in the table(13).

### UC2: Display all the car parks in Bristol on a map.

- (UC2T1) E2E test - testing the correct amount of car parks (57) displayed on the map.

### UC3: Find nearest free of charge car park in Bristol.
For this use-case, one unit and two end-to-end tests performed. The file of the unit test (test2.js) can be found in the 'test' folder of the main file directory. 
In order to run 'UC3 - check view engine' unit test, it is required to install Mocha test framework as a development dependency. The file of the end-to-end test (testUC3.js) can be found in the 'e2e' folder of the main file directory, it contains both UC3T1 and UC3T2. In order to run the end-to-end tests, it is required to install TestCafe end-to-end web testing tool and run the server in the background.
- (UC3 - check view engine) unit test verifies that the application uses the appropriate view engine. 
- (UC3T1) E2E test replicates the user actions of finding the nearest free of charge car park. The test verifies that the user can be presented with a table, containing the nearest free car park after executing a series of user actions.  
- (UC3T2) E2E test replicates the user actions of displaying all the free car parks of Bristol on the map. The test verifies that the user can be presented with a map, displaying all of the free car parks, after executing a series of user actions.


Requirements traceability matrix, describing each of the executed tests and their current status:


| Use-Case ID | Requirement ID | Test Case | Status |
|  ------ | -------------- | --------- | ------ |
| testUC1 |     FR7        | UC1T1     | Pass   |
| testUC1 |  FR2 and FR3   | UC1T2     | Pass   |
|  ------ | -------------- | --------- | ------ |
| testUC2 |     FR6        |    UC2T1  |  Pass  |
|  ------ | -------------- | --------- | ------ |
| testUC3 | FR1            | UC3       |  Pass  |
| testUC3 | FR1 and FR5    | UC3T1     |  Pass  |
| testUC3 | FR5 and FR6    | UC3T2     |  Pass  |




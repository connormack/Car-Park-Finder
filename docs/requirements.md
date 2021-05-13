# Requirements

## User Needs

### Actors
Motorist, driver of a car who uses the application to discover car parks within Bristol. This actor's main goal is to locate the suitable type of parking space through the application to park their car.

### User stories
* As a motorist in Bristol, I want to view car parks in a chosen area or all car parks in Bristol, so that I can choose a suitable one for me.
* As a motorist I want to find carpark on a map
* As a motorist, I want to find the nearest free car park so that I can park my vehicle for free of charge.



### Use Cases
* UC1: View the information of all the car parks in a chosen area of Bristol. Otherwise, view the information of all car parks in Bristol.
* UC2: Find a car park on a map
* UC3: Find nearest free car park

| USE-CASE | UC1: View all the car parks in a chosen area of Bristol. Otherwise, view the information of all car parks in Bristol. | 
| -------- | ------------------------------ |
| **Description** | As a motorist in Bristol, I want to view all the car parks in a chosen area or all car parks in Bristol, so that I can choose one for me. |
| **Actors** | Motorist |
| **Assumptions** | The user will want to view the car parks of a certain area |
| **Steps** | <ol><li>Opt to find the nearest car park</li><li>Request user to choose their desired area from a dropdown list</li><li>Choose the area (upon requested) </li><li>Get all the car parks in the area from the database</li><li>View the information about the car parks in a table</li></ol> |
| **Variations** | The user wants to view all car parks in Bristol. In this case the steps are :-<ol><li>Opt to view the information about all car parks in Bristol</li>Click on the _'All Car Parks in Bristol'_ button</li><li>Display the information about all the car parks in a table.</li></ol> |
| **Non-functional** | Listed below, at the end of all use cases for the project. |
| **Issues** | None |

|USE-CASE | UC 2:  Find a car park on a map | 
| -------------------------------------- | ------------------- |
| **Description** | As a motorist I want to find car park on a map |
| **Actors** | Motorist |
| **Assumptions** | Browser has internet connectivity</td></tr>
| **Steps** | <ol><li>Opt to view a map of Bristol.</li><li>Request permission to access webpage of said map.</li><li>Give permission for webpage access.</li><li>Find the cap park in the desired database, data received from database.</li><li>View the car park at the desired location on the map.</li><ol>|
| **Variations** | Browser does not have internet connectivity |
| **Non-functional** |  |
| **Issues** | |

|USE-CASE | UC3: Find nearest free car park | 
| -------------------------------------- | ------------------- |
| **Description** | As a motorist, I want to find the nearest free car park so that I can park my vehicle for free of charge |
| **Actors** | Motorist |
| **Assumptions** | Browser supports geo-location and dataset contains relevant data </td></tr>
| **Steps** | <ol><li>Give permission for geo-location (on request)</li><li>Opt to set range of distance for the user</li><li>Opt to view table of all car parks near me</li><li>Opt to view table of only free car parks within range</li><li>Display free car parks on the map</li><ol>|
| **Variations** | Browser doesn't support geo-location <ol><li>Input postcode</li><li>Opt to set range of distance for the user</li><li>Opt to view table of all car parks near me</li><li>Opt to view table of only free car parks within range</li><li>Display free car parks on the map</li><ol> |
| **Non-functional** | |
| **Issues** |  |


![User Case Diagram](images/UCD-car-park-finder.PNG)
## Software Requirements Specification
### Functional requirements

* FR1: The system must provide a menu of available car parks. (from UC2 and UC3)
* FR2: The system must request the user to input the desired area. (from UC1)
* FR3: The system must, upon recieving the area, display the information about the car parks in the area from the database. (from UC1)
* FR4: The system shall request permission to access map webpage. (from UC2 and UC3) 
* FR5: The system shall get data of car park locations from database. (from UC2 and UC3)
* FR6: The system shall show a map with the car park locations pinpointed. (from UC2 and UC3)
* FR7: The system must, if the user desires, display all the car parks in Bristol (in the database). (from UC1)
* FR8: The system could use the user's postcode to locate the area. (from UC1)
* FR9: The system will not use geolocation to locate the user and therefore, the area of the user to display car parks in that area. (from UC1)

### Non-Functional Requirements
* NFR1 – should accurately show car parks on the map (functionality) (from UC2 and UC3)
* NFR2 – car park location data will be up to date from database(reliability) (from UC1 and UC2 and UC3)
* NFR3 – auto refresh to allow up-to-date information(useability) (from UC2 and UC3)
* NFR4 – auto refresh set to sensible interval for effectiveness (efficacy) (from UC2 and UC3)
* NFR5 – default location set to Bristol city centre as a zero point (maintainability) (from UC2 and UC3)
* NFR6 - display a welcome screen(understandability) (from UC1, UC2 and UC3)



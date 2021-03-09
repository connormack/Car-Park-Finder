# Requirements

## User Needs

### Actors
Motorist

### User stories
* As a motorist in Bristol, I want to find the nearest car park so that I can park my car.
* As a motorist I want to find carpark on a map
* As a motorist, I want to find the nearest free car park so that I can park my vehicle for free of charge.



### Use Cases
* UC1: Find the nearest car park
* UC2: Find a car park on a map
* UC3: Select car park type

| USE-CASE | UC1: Find the nearest car park | 
| -------- | ------------------------------ |
| **Description** | As a motorist in Bristol, I want to find the nearest car park so that I can park my car |
| **Actors** | Motorist |
| **Assumptions** | The user will chose the nearest car park |
| **Steps** | <ol><li>Opt to find the nearest car park</li><li>Request user to enter their postcode</li><li>Enter the postcode in the allocated space (upon requested) </li><li>Get the nearest car park from the database</li><li>View the location of the nearest car park</li></ol> |
| **Variations** | The user will prefer to consider relevant options before choosing. In this case the steps are :-<ol><li>Opt to find the nearest car park near me</li><li>Request the user to enter their postcode</li><li>Enter the postcode in the allocated space (upon requested)</li><li>Get the nearest car park from the database</li><li>Click on the _'view other car parks near me'_ button</li><li>Display five other nearest car parks in a table in ascending order of their distance from the user's postcode input</li></ol> |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

|USE-CASE | UC 2:  Find a car park on a map | 
| -------------------------------------- | ------------------- |
| **Description** | As a motorist I want to find carpark on a map |
| **Actors** | Motorist |
| **Assumptions** | Browser has internet connectivity</td></tr>
| **Steps** | <ol><li>Opt to view a map of Bristol.</li><li>Request permission to access webpage of said map.</li><li>Give permission for webpage access.</li><li>Find the cap park in the desired database, data received from database.</li><li>View the car park at the desired location on the map.</li><ol>|
| **Variations** | Browser does not have internet connectivity |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

|USE-CASE | UC3: Select car park type | 
| -------------------------------------- | ------------------- |
| **Description** | As a motorist, I want to find the nearest free car park so that I can park my vehicle for free of charge |
| **Actors** | Motorist |
| **Assumptions** | Browser supports geo-location and dataset contains relevant data </td></tr>
| **Steps** | <ol><li>Give permission for geo-location (on request)</li><li>Opt to set range of distance for the user</li><li>Opt to view table of all car parks near me</li><li>Opt to view table of only free car parks within range</li><li>Display free car park within range on the map</li><ol>|
| **Variations** | Browser doesn't support geo-location <ol><li>Input postcode</li><li>Opt to set range in distance for the user</li><li>Opt to view table of all car parks near me</li><li>Opt to view table of only free car parks within range</li><li>Display free car park within range on the map</li><ol> |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

<<<<<<< Updated upstream
| TODO: USE-CASE ID e.g. UC1, UC2, ... | TODO: USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
| **Actors** | TODO: List of actors involved in use case |
| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

=======
>>>>>>> Stashed changes
TODO: Your Use-Case diagram should include all use-cases.

![User Case Diagram](images/UCD-car-park-finder.PNG)
## Software Requirements Specification
### Functional requirements

* FR1: The system must provide a menu of available car parks. (from UC1 and UC2 and UC3)
* FR2: The system must request the user to input the desired postcode. (from UC1)
* FR3: The system must, upon recieving the postcode, get the nearest car park from the database. (from UC1)
* FR4: The system shall request permission to access map webpage. (from UC2 and UC3) 
* FR5: The system shall get data of car park locations from database. (from UC1 and UC2 and UC3)
* FR6: The system shall show a map with the car park locations pinpointed. (from UC2 and UC3)
* FR7: The system must, if the user desires, display five other nearest car parks to the desired postcode. (from UC1)
* FR8: The system could display all the car park in the database in a table in the menu page. (from UC1 and UC3)
* FR9: The system will not use geolocation to locate the user and therefore, the nearest car park to the user. (from UC1)

### Non-Functional Requirements
* NFR1 – should accurately show the car park on the map (functionality) (from UC1 and UC2 and UC3)
* NFR2 – car park location data will be up to date from database(reliability) (from UC1 and UC2 and UC3)
* NFR3 – auto refresh to allow hands free use while driving(useability) (from UC1 and UC2 and UC3)
* NFR4 – auto refresh set to sensible interval for effectiveness (efficacy) (from UC1 and UC2 and UC3)
* NFR5 – default location set to UWE as a zero point (maintainability) (from UC1 and UC2 and UC3)
* NFR6 – runs on IOS and android to allow mobile access(portability) (from UC1 and UC2 and UC3)
* NFR7 - display a welcome screen(understandability) (from UC3)
* NRF8 - present option to set range in distance for the user (configurability) (from UC3)


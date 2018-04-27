# Doctor Lookup

####

#### By **Garnett Puett, April 27, 2018**

##

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Program will take take input medical issue and return list of doctors in Portland that fit search query**| "cough" | "Dr. Mark, Dr. Sanchez, etc." |
|**Program will take take input name and return list of doctors in Portland that fit search query**| "Mark Sanchez" | "Dr. Mark, Dr. Sanchez, etc." |
|**Program will return first name, last name, address, phone number, website, and whether doctor is accepting new patients**| "Mark Sanchez" | "Dr. Mark Sanchez, 2033 SW 5th Ave, Portland OR 97201, drmark.com, taking new patients" |
|**The program will return an error message if the API call results in an error**| "Dr. Mark" | "There was an error processing your request, please try again" |
|**The program will return a specific message if the query response is null**| "Dr. Mark" | "There were no results mathcing your search query" |

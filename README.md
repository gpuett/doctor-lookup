# Doctor Lookup

#### A program that lets users input medical issues and/or a doctor's name to find nearby medical professionals.

#### By **Garnett Puett, April 27, 2018**

## Description

A website created with JavaScript that takes user input symptom and doctor name to find nearby doctors and list their contact information.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Program will take take input medical issue and return list of doctors in Portland that fit search query**| "cough" | "Dr. Mark, Dr. Sanchez, etc." |
|**Program will take take input name and return list of doctors in Portland that fit search query**| "Mark Sanchez" | "Dr. Mark, Dr. Sanchez, etc." |
|**Program will return first name, last name, address, phone number, website, and whether doctor is accepting new patients**| "Mark Sanchez" | "Dr. Mark Sanchez, 2033 SW 5th Ave, Portland OR 97201, drmark.com, taking new patients" |
|**The program will return an error message if the API call results in an error**| "Dr. Mark" | "There was an error processing your request, please try again" |
|**The program will return a specific message if the query response is null**| "Dr. Mark" | "There were no results mathcing your search query" |

## Setup/Installation Requirements

1. Clone this repository
2. In the terminal, run "npm install"
3. Open a browser and travel to <a href="https://developer.betterdoctor.com/">https://developer.betterdoctor.com/</a> and sign up for a free API key
4. Create a .env file in the top level of the repository directory and save your API key as "exports.apiKey" in this file
5. In the terminal, run "npm run start" this will open "localhost:8080" in your browser.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * JQuery
  * Webpack
  * API calls

## Support and contact details

Please do not contact.

### License

*This software is licensed under the MIT License*

Copyright (c) 2018 **Garnett Puett**

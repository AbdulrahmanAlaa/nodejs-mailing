# Sending Emails using NodeJs

## Pre-requisites
* NodeJs V12 

## Technologies and 3rd Party Modules
* using Typescript with ES6 modules
* using Environment Variables
* using Restful services approach with MVC in the NodeJS
* using `express` to host the APIs
* using `express-validator` for parameters validation
* using `firebase` Cloud functions to host our endpoints `/api/endpoint-name`


## Usage 
> In order to call the api hit the following end point 

`POST: https://nodemailer-253804.firebaseapp.com/api/email`

*headers* `content-type: application/json`

*Body Part*

```
{ 
    "accepted": [
        "gmorgan@talabat.com"
    ],
    "rejected": [],
    "envelopeTime": 199,
    "messageTime": 657,
    "messageSize": 256,
    "response": "250 2.0.0 OK  1569493972 w16sm448155ilc.62 - gsmtp",
    "envelope": {
        "from": "boody.vc@gmail.com",
        "to": [
            "gmorgan@talabat.com"
        ]
    },
    "messageId": "<8d24223e-cb03-259f-bbe6-9cd6253ba19c@gmail.com>"
}
```

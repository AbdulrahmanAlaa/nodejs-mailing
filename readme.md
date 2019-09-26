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
	"subject":"",
	"body":"<h1>Hello world</h1>",
	"to":["gmorgan@talabat.com"]
}
```

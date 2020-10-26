const express = require('express');
const morgan = require ('morgan');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);
//Middlewares

//routes

//STatic Files

//Starting the server 
app.listen(app.get('port'),() =>{
console.log(`server on port ${app.get('port')}`);
});
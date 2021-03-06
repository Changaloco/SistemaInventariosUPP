const express = require('express');
const morgan = require ('morgan');

const path = require('path');
require('./db');

const app = express();


//settings
app.set('port',process.env.PORT || 4000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/tasks',require('./routes/task.routes'));
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Starting the server 
app.listen(app.get('port'),() =>{
console.log(`server on port ${app.get('port')}`);
});

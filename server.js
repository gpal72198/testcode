require('./models/db');

const express = require('express');

const bookController = require('./controllers/bookController');


var app = express();

app.listen(8080, () =>{
    console.log('Express server started at port: 8080');
});

app.use('/books', bookController)
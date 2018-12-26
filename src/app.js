const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//SETTINGS
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//IMPORTING ROUTES
const routing = require('./routes/index.js');

//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//ROUTES
app.use('/',routing);

//DB CONNECTION
mongoose.connect('mongodb://localhost/db-testing')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

//SERVER LISTENING

app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'));
});
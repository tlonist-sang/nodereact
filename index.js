const express = require('express'); //commonjs module
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./services/passport'); // import express from 'express' => es2016 module

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets
    //like our main.js file, or main.css file
    app.use(express.static('client/build'));

    //express will serve up the index.html file
    //if it doens't recognize this route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
    });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const signupRoute = require('./routes/signup');

app.use('/signup', signupRoute);

mongoose.connect(process.env.DB_Connection,{useUnifiedTopology: true,useNewUrlParser: true },() => 
    console.log('connected to DB!')
);

app.listen(3000);
 
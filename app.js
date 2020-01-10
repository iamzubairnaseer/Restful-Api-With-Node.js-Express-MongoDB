const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(express.json({extended:true}));

app.use(cors());

app.use(bodyParser.json());

const signupRoute = require('./routes/signup');

app.use('/signup', signupRoute);

mongoose.connect("mongodb+srv://iamzubairnaseer:<Passw0rd>@cluster0-nts6u.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true,useNewUrlParser: true },() => 
    console.log('connected to DB!')
);

app.listen(3000, ()=> console.log('Server Started at 3000'));
 
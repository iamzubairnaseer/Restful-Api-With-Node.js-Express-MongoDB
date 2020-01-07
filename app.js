const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(express.json({extended:false}))
app.use(cors());
app.use(bodyParser.json());

const signupRoute = require('./routes/signup');

app.use('/signup', signupRoute);

mongoose.connect(process.env.DB_Connection,{useUnifiedTopology: true,useNewUrlParser: true },() => 
    console.log('connected to DB!')
);

app.listen(3000, ()=> console.log('Server Started at 3000'));
 
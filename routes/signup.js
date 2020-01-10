const express = require('express');
const router = express.Router();
const Signup = require('../models/sign');
const mongoose = require('mongoose');

router.post('/', async (req,res)=>{

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let password = req.body.password;

    let user = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        phoneNumber : phoneNumber,
        password : password
    }

    console.log(user);

    let signModel = new Signup(user);
    signModel.save();
    res.json(signModel);


    // const sign = new Signup({
    //     firstName : req.body.firstName,
    //     lastName : req.body.lastName,
    //     email : req.body.email,
    //     phoneNumber: req.body.phoneNumber,
    //     password: req.body.password
    // });
    // try{
    //     const savedUser = await userModel.save();
    //     res.json(savedUser);
    // } catch(err){
    //     res.json({message:err});
    // }

    // console.log(req.body);

});

router.get('/', (req,res)=>{
    console.log('at signup');
    res.send('Hello Singup');
})
module.exports = router;
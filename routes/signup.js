const express = require('express');
const router = express.Router();
const Signup = require('../models/sign');
const mongoose = require('mongoose');

router.post('/', async (req,res)=>{

    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password
    } = req.body;
    let user  = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.password = password;
    let signModel = new Signup(user);
    console.log(req.body);
    await signModel.save();
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
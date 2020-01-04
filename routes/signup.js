const express = require('express');
const router = express.Router();
const Sign = require('../models/sign');

router.post('/', async (req,res)=>{

    console.log(req.body);

    const sign = new Sign({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    });
    try{
        const savedUser = await sign.save();
        res.json(savedUser);
    } catch(err){
        res.json({message:err});
    }
});

module.exports = router;
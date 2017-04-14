var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.post('/', function(req, res, next) {

    var name = req.body.name;
    var accountNumber = req.body.accountNumber;
    var cardNumber = req.body.cardNumber;
    var balance = req.body.balance;
    

    var newUser = new user.User();

    newUser.name = name;
    newUser.cardno = cardNumber;
    newUser.actno = accountNumber;
    newUser.balance = balance;
    newUser.transactions = [];
    newUser.lastup = new Date();


    newUser.save(function(err) {

        if(!err) {
            console.log("New user saved");
        }

        return;

    });

    res.end();
});

    
module.exports = router;
var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.post('/', function(req, res, next) {

    var name = req.body.name;
    var accountNumber = req.body.accountNumber;
    var cardNumber = req.body.cardNumber;

    user.User.find({name:name,actno:accountNumber,cardno:cardNumber}, function (err, foundData) {
            
        if(!err) {
            console.log("User found");
            console.log(foundData);
            res.end(1+'');
            return;
        }    

    });    


});

    
module.exports = router;
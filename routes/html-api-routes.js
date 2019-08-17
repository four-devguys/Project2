// Requiring our models
//var db = require("../models");
var express = require("express");
var router = express.Router();
var emotion = require('emoji-emotion')

router.get("/", function (req, res) {
    var data = {
        apples: emotion,

    };
    res.render('index', data);
});


router.get("/chart", function (req, res) {
    var data = {
        
    };
    res.render('chart', data);
});

module.exports = router;
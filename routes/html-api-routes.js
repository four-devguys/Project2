// Requiring our models
//var db = require("../models");
var express = require("express");
var router = express.Router();
var emotion = require('emoji-emotion')

router.get("/", function (req, res) {
    var data = {
        emojis: emotion
    };
    res.render('index', data);
});

module.exports = router;
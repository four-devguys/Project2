// Requiring our models
//var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    var data = {
        apples: 'hello world!',
    };
    res.render('index', data);
});

module.exports = router;
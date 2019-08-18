// Requiring our models
//var db = require("../models");
var express = require("express");
var router = express.Router();
var emotion = require('emoji-emotion')

router.get("/", function (req, res) {

    var sortedEmotion = emotion.sort(function(a, b){
        return a.polarity-b.polarity
    })

    var positivePolarity = [];
    var neutralPolarity =[];
    var negativePolarity = [];


    for(var i = 0; i < sortedEmotion.length; i++){
        var emojiPolarity = sortedEmotion[i].polarity;
        if(emojiPolarity > 0){
            positivePolarity.push(emotion[i]);
        }else if(emojiPolarity == 0){
            neutralPolarity.push(emotion[i]);
        }else{
            negativePolarity.push(emotion[i]);
        }
    }



    var data = {
        positivePolarityEmojis: positivePolarity,
        neutralPolarityEmojis: neutralPolarity,
        negativePolarityEmojis: negativePolarity,
        title: "Emotion Tracker"
    };
    res.render('index', data);
});

module.exports = router;
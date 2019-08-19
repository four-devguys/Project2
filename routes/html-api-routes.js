// Requiring our models

var express = require("express");
var router = express.Router();
var db = require("../models");


// GET route for getting all of the emojis
router.get("/", function(req, res) {
  var query = {};
  if (req.query.id) {
    query.id = req.query.id;
  }

  db.emojis.findAll({
    where: query,
  }).then(function(dbemoji) {
    var sortedEmotion = dbemoji.sort(function(a, b){
      return a.polarity-b.polarity
  })

  var positivePolarity = [];
  var neutralPolarity =[];
  var negativePolarity = [];


  for(var i = 0; i < sortedEmotion.length; i++){
      var emojiPolarity = sortedEmotion[i].polarity;
      if(emojiPolarity > 0){
          positivePolarity.push(dbemoji[i]);
      }else if(emojiPolarity == 0){
          neutralPolarity.push(dbemoji[i]);
      }else{
          negativePolarity.push(dbemoji[i]);
      }
  }
  var data = {
      positivePolarityEmojis: positivePolarity,
      neutralPolarityEmojis: neutralPolarity,
      negativePolarityEmojis: negativePolarity,
      title: "Emotion Tracker"
  };

    res.render("index",data)
  });
});

module.exports = router;
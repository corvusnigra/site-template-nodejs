var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json')


router.get('/speakers', function (req, res) {
    var info = '';
  dataFile.speakers.forEach(function (item) {
      info += `
      <h1>${item.title}</h1>
      <p>${item.summary}</p>
      `
  });
    res.send(`
     ${info}
    `)
});




router.get('/speakers/:speakerId', function (req, res) {
    var speaker = dataFile.speakers[req.params.speakerId];
    res.send(`
   <h1>${speaker.title}</h1>
   <h2>${speaker.name}</h2>
   <p>${speaker.summary}</p>
   `)
});


module.exports = router;
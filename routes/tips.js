var express = require('express');
var router = express.Router();

var connection = require('../database/database.js');


// insert a new record
router.post('/addTips', function(req, res, next) {
  console.log(req.body)
  let sql = `REPLACE INTO MY_App.exercises (name, yt_link, details) VALUES (?)`;

  let values = [
    req.body.name,
    req.body.yt_link,
    req.body.details,
  ];
  

  connection.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.send({'Success':true});
  })
    
});

// get all the tips
router.post('/getTipsList', function(req, res, next) {
  console.log(req.body)
  let sql = `SELECT * FROM My_App.exercises`;
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    console.log(data)
    res.send(data);
  })
    
});

// del the tips 
router.post('/delete', function(req, res, next) {
  console.log(req.body.name)
  let sql = `DELETE FROM My_App.exercises WHERE name="${req.body.name}";`;
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send({'Success':true});
  })
    
});

module.exports = router;
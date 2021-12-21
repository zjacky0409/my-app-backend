var express = require('express');
var router = express.Router();

var connection = require('../database/database.js');


// insert a new record
router.post('/addRecord', function(req, res, next) {

  // should be diff
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

// get all the record
router.post('/getRecordList', function(req, res, next) {
  console.log(req.body)
  let sql = `SELECT * FROM My_App.exercises`;
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send(data);
  })
    
});

// del the record 
router.post('/deleteRecord', function(req, res, next) {
  console.log(req.body.name)
  let sql = `DELETE FROM My_App.exercises WHERE name="${req.body.name}";`;
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send({'Success':true});
  })
    
});

module.exports = router;
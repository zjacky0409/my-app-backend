var express = require('express');
var router = express.Router();

var connection = require('../database/database.js');


// insert a new record
router.post('/addRecord', function(req, res, next) {

  let sql = `REPLACE INTO MY_App.record VALUES (?)`;


  let values = [
    req.body.date,
    req.body.name,
    req.body.set,
    req.body.weight,
    req.body.rest_time,
    req.body.rpe,
    req.body.rir,
    req.body.remark
  ];
  

  connection.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.send({'Success':true});
  })
    
});

// get all the record
router.post('/getRecordList', function(req, res, next) {
  console.log(req.body.date)
  let sql = "SELECT * FROM My_App.record  WHERE (`date` = '"  + req.body.date+  "')";
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send(data);
  })
    
});

// del the record 
router.post('/deleteRecord', function(req, res, next) {
  console.log(req.body.name)
  console.log(req.body.date)
  let sql = `DELETE FROM My_App.record WHERE (name="${req.body.name}") and (date="${req.body.date}");`;

  console.log(sql)
  
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send({'Success':true});
  })
    
});

// get all the record
router.post('/getSingleRecord', function(req, res, next) {
  console.log(req.body.date)
  let sql = `SELECT * FROM My_App.record WHERE (name="${req.body.name}") and (date="${req.body.date}");`
  console.log(sql)
  connection.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.send(data[0]);
  })
    
});

module.exports = router;
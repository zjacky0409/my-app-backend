var express = require('express');
var router = express.Router();

let exercises =  [{"exercises":"Lat Pull Down"},{"exercises":"RDL"},{"exercises":"Squat"},{"exercises":"Pull Up"},{"exercises":"Bench Incline"}]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// this following rounter is useless and it is a ref only
router.post('/', function (req, res) {
  console.log("Someone send a post request to me")

  console.log(typeof [{"exercises":"Lat Pull Down"},{"exercises":"RDL"},{"exercises":"Squat"},{"exercises":"Pull Up"},{"exercises":"Bench Incline"}])
 res.send([{"exercises":"Lat Pull Down"},{"exercises":"RDL"},{"exercises":"Squat"},{"exercises":"Pull Up"},{"exercises":"Bench Incline"}]);
 })

router.post('/getExercises', function (req, res) {
 console.log("Someone send a post request to me TRTTT")
 console.log(exercises)

 res.send(exercises);
 })

 router.post('/getAllExercises', function (req, res) {
   console.log("Someone send a post request to me TRTTT")
   console.log(exercises)
 
   res.send(exercises);
   })

router.post('/testingAgain', function (req, res) {
 console.log("Someone send a post request to me by post")
 res.send({"exercises":"Testing Done"});
 })

router.post('/addEvent', function (req, res) {
 console.log(req.body)
 exercises.push({"exercises":req.body.name})
 res.send([{"name":"Testing Done","set":1,"rir":1,"rpe":1, "weight":15, "rest_time":"1min","remark":"GGGGG","date":"12-12-2101"},
 {"name":"Testing Done Two","set":2,"rir":2,"rpe":2, "weight":1222, "rest_time":"2min","remark2":"GGGGG2222","date":"12-12-2101"}]);
})

router.post('/getEvent', function (req, res) {
 console.log(req.body)

 if(req.body.date === "1"){
   res.send([{"name":"Testing Done One","set":1,"rir":1,"rpe":1, "weight":15, "rest_time":"1min","remark":"GGGGG","date":"12-12-2101"},
   {"name":"Testing Done ONe","set":2,"rir":2,"rpe":2, "weight":1222, "rest_time":"2min","remark2":"GGGGG2222","date":"12-12-2101"}]);
 }else{
   res.send([{"name":"Testing Done two","set":2222221,"rir":1222222,"rpe":22221, "weight":1222225, "rest_time":"1min","remark":"GGGGG","date":"12-12-2222101"},
   {"name":"Testing Done two","set":22222,"rir":222222,"rpe":2, "weight":12222222, "rest_time":"2222222min","remark222222":"GGGGG222222222","date":"12-122222-2101"}]);
 }

})

router.post('/getSingleEvent', function (req, res) {
 console.log(req.body)
   res.send(
   {"name":"Testing Done ONe","set":2,"rir":2,"rpe":2, "weight":1222, "rest_time":"2min","remark2":"GGGGG2222","date":"12-12-2101"});

})



module.exports = router;

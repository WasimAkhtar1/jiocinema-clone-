var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/subscribe`,(req,res)=>{
  res.render(`subscribe`)
})

router.get(`/foryou`,(req,res)=>{
  res.render(`for`)
})
router.get(`/sports`,(req,res)=>{
  res.render(`sports`)
})

router.get(`/LoginHere`,(req,res)=>{
  res.render(`form.ejs`)
})

router.get(`/movies`,(req,res)=>{
  res.render(`movie`)
})

router.get(`/Tvshows`,(req,res)=>{
  res.render(`show`)
})


router.get(`/news`,(req,res)=>{
  res.render(`news`)
})

router.post(`/login`,(req,res)=>{
  res.render(`profile`)
})

module.exports = router;

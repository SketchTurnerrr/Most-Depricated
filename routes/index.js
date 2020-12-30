const express = require('express');
const router = express.Router();
// const HomePageController = require('../controllers/HomePageController');

const { catchErrors } = require('../handlers/errorHandlers');
// router.get('/', HomePageController.homePage);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/audio/', (req, res) => {
  res.render('audio/index');
});

router.get('/ministries/', (req, res) => {
  res.render('ministries');
});

router.get('/gallery/', (req, res) => {
  res.render('gallery/index');
});

// SUNDAY SERMON
router.get('/audio/sermon/', (req, res) => {
  res.render('audio/sermon/index');
});

router.get('/audio/sermon/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  res.render(`audio/sermon/${id}`);
});

//	BIBLE STUDY
router.get('/audio/bible-study/', (req, res) => {
  res.render('audio/bible-study/index');
});

router.get('/audio/bible-study/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  res.render(`audio/bible-study/${id}`);
});

// BIBLE COLLEGE

router.get('/audio/college/', (req, res) => {
  res.render('audio/college/index');
});

router.get('/audio/college/spiritual-life/', (req, res) => {
  res.render('audio/college/spiritual-life');
});

router.get('/audio/college/nt-survey/', (req, res) => {
  res.render('audio/college/nt-survey');
});

router.get('/audio/college/theology-course/', (req, res) => {
  res.render('audio/college/theology-course');
});

router.get('/audio/college/discipleship/', (req, res) => {
  res.render('audio/college/discipleship');
});

module.exports = router;

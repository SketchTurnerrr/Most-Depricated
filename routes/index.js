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

router.get('/audio/sermon/2/', (req, res) => {
	res.render('audio/sermon/2');
});

router.get('/audio/sermon/3/', (req, res) => {
	res.render('audio/sermon/3');
});

router.get('/audio/sermon/4/', (req, res) => {
	res.render('audio/sermon/4');
});

router.get('/audio/sermon/5/', (req, res) => {
	res.render('audio/sermon/5');
});

router.get('/audio/sermon/6/', (req, res) => {
	res.render('audio/sermon/6');
});

router.get('/audio/sermon/7/', (req, res) => {
	res.render('audio/sermon/7');
});

router.get('/audio/sermon/8/', (req, res) => {
	res.render('audio/sermon/8');
});

router.get('/audio/sermon/9/', (req, res) => {
	res.render('audio/sermon/9');
});

router.get('/audio/sermon/10/', (req, res) => {
	res.render('audio/sermon/10');
});

router.get('/audio/sermon/11/', (req, res) => {
	res.render('audio/sermon/11');
});

router.get('/audio/sermon/12/', (req, res) => {
	res.render('audio/sermon/12');
});

router.get('/audio/sermon/13/', (req, res) => {
	res.render('audio/sermon/13');
});

//	BIBLE STUDY
router.get('/audio/bible-study/', (req, res) => {
	res.render('audio/bible-study/index');
});

router.get('/audio/bible-study/2/', (req, res) => {
	res.render('audio/bible-study/2');
});

router.get('/audio/bible-study/3/', (req, res) => {
	res.render('audio/bible-study/3');
});

router.get('/audio/bible-study/4/', (req, res) => {
	res.render('audio/bible-study/4');
});

router.get('/audio/bible-study/5/', (req, res) => {
	res.render('audio/bible-study/5');
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

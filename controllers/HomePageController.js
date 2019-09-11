const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
	res.render('index');
};

exports.emailPosted = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	res.redirect('/');
};

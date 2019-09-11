const mongoose = require('mongoose');
const slug = require('slugs');
mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
	first_name: {
		type: String,
		trim: true
	},

	slug: String,

	last_name: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	text_area: {
		type: String,
		trim: true
	}
});

storeSchema.pre('save', function(next) {
	if (!this.isModified('fist_name')) {
		next();
		return;
	}
	this.slug = slug(this.first_name);
	next();
});
module.exports = mongoose.model('Store', storeSchema);

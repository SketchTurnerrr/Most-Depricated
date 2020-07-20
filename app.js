const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
const i18n = require('i18n-express');
const geolang = require('geolang-express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
	session({
		secret: process.env.SECRET,
		key: process.env.KEY,
		resave: true,
		saveUninitialized: true,
		// store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

app.use(
	geolang({
		defaultLang: ['en'],
		siteLangs: ['en', 'ru', 'ua'],
		cookieLangName: 'ulang',
		browserEnable: 'true'
	})
);

app.use(
	i18n({
		translationsPath: path.join(__dirname, 'i18n'),
		siteLangs: ['en', 'ru', 'ua'],
		textsVarName: 'translation'
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
	res.locals.h = helpers;
	res.locals.flashes = req.flash();
	next();
});

app.use('/', routes);

app.use(errorHandlers.notFound);

app.use(errorHandlers.flashValidationErrors);

if (app.get('env') === 'development') {
	app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;

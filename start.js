// const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });



const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running → PORT ${server.address().port} http://localhost:7777`);
});

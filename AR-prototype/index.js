if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const hbs = require('express-hbs');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const express_enforces_ssl = require('express-enforces-ssl');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
	app.enable('trust proxy');
	app.use(express_enforces_ssl());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.engine(
	'hbs',
	hbs.express4({
		partialsDir: __dirname + '/views'
	})
);

const PORT = process.env.PORT || '2022';

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(path.resolve(`${__dirname}/public`)));

const authUser = {}
authUser[`${process.env.AUTH_USER}`] = process.env.AUTH_PWD;

if (process.env.NODE_ENV === 'production'){
	app.use(basicAuth({
	    challenge: true,
	    users: authUser
	}));
}

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/scan', (req, res) => {
	res.render('ar-app', {debug: process.env.DEBUG_AR});
});

app.get('/images', async(req, res) => {
	res.render('gallery', {images: ['fruit_CS.jpg', 'woman_CS.jpg', 'plenty_CS.jpg', 'lifetree_CS.jpg']});
});

if (process.env.NODE_ENV !== 'production') console.log(`Server is running locally on port ${PORT}`);
app.listen(PORT);

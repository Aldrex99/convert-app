/**
 * app.js - Application for the server
 */
const express = require('express');
const jwt = require('jsonwebtoken');
const unitsRouter = require('./routes/units');
const convertRouter = require('./routes/convert');
const userRouter = require('./routes/user');

const app = express();

function contentTypeChecker(req, res, next) {
	if (req.headers['content-type'] === 'application/json') {
		next();
	} else {
		res.status(400).send(JSON.stringify({message: 'Header missing or incorrect'}));
	}
}

function methodChecker(req, res, next) {
	if (req.method === 'POST' || req.method === 'GET') {
		next();
	} else {
		res.status(405).send(JSON.stringify({message: 'Method not allowed'}));
	}
}

function verifyToken(req, res, next) {
	const token = req.headers['authorization'];
	if (!token) {
		res.status(403).send(JSON.stringify({message: 'No token provided'}));
	} else {
		jwt.verify(token, process.env.SECRET_FOR_TOKEN, (err, decoded) => {
			if (err) {
				res.status(500).send(JSON.stringify({message: 'Failed to authenticate token'}));
			} else {
				req.userId = decoded.id;
				next();
			}
		});
	}
}


app.use(contentTypeChecker)
app.use(methodChecker)

app.use(express.json());

app.use('/user', userRouter);

app.use(verifyToken);

app.use('/units', unitsRouter);
app.use('/convert', convertRouter);


//

module.exports = app;
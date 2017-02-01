import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './model';
import departmentRouter from './controller/department';

const app = express();

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if ('OPTIONS' === req.method) { res.send(200); }
	else { next(); }
});

app.use('/department', departmentRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json(err);
});

db.authenticate().then(() => {
	app.listen(8090);
});

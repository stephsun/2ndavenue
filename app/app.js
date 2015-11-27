'use strict';

import express from 'express';
import path from 'path';
import { RoutingContext, match } from 'react-router';
import Transmit from 'react-transmit';
import { createLocation } from 'history';

import { sequelize } from './models';
import template from './templates/main';
import routes from './routes';

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost';
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static('static'));

app.get('/old', (req, res) => {
	res.render('index');
});

app.get('*', (req, res) => {
	const location = createLocation(req.path);

	match({ routes, location }, (error, redirectLocation, renderProps) => {
		if (redirectLocation) {
			res.redirect(redirectLocation.pathname + redirectLocation.search, '/');
			return;
		}

		// 	//TODO: error handling
		// if (error || !renderProps) {
		// 	return;
		// }

		Transmit.renderToString(RoutingContext, renderProps).then(({ reactString, reactData }) => {
			res.send(Transmit.injectIntoMarkup(template(reactString), reactData));
		});
	});
});

sequelize.sync().then(() => {
    app.listen(port, () => {
    	console.info('==> ✅   App listening at http://%s:%s', host, port);
    });
});

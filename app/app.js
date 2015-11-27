'use strict';

import express from 'express';
import path from 'path';
import { RoutingContext, match } from 'react-router';
import Transmit from 'react-transmit';
import { createLocation } from 'history';

import { sequelize } from './models';
import layout from './layout';
import routes from './routes';

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost';
const app = express();

app.use(express.static(__dirname + '/static'));

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

		Transmit.renderToString(
			RoutingContext,
			renderProps
		).then(({ reactString, reactData }) => {
			res.send(Transmit.injectIntoMarkup(layout(reactString), reactData));
		});
	});
});

sequelize.sync().then(() => {
    app.listen(port, () => {
    	console.info('==> ✅   App listening at http://%s:%s', host, port);
    });
});

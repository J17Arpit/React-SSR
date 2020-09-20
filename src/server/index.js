import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';

import App from '../App';
import Routes from '../routes';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/*', (req, res) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise;

    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    } else {
        promise = Promise.resolve(null);
    }

    promise.then(data => {
        const context = { data };
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );

        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }

            if (context.status === 404) {
                res.status(404);
            }
            if (context.url) {
                return res.redirect(301, context.url);
            }

            return res.send(
                indexData
                    .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                    .replace(
                        '</body>',
                        `<script>window.__INITIAL_DATA__ = ${serialize(data)}</script></body>`
                    )
            );
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
'use strict';

export default (reactString) => {
    return (
        `<!doctype html>
            <html lang="en-us">
                <head>
                    <meta charset="utf-8">
                    <title>react-isomorphic-starterkit</title>
                    <link rel="shortcut icon" href="/favicon.ico">
                </head>
                <body>
                    <div id="react-root">${reactString}</div>
                </body>
            </html>`
    );
};

const express = require('express');

require('@babel/register');
require('@babel/polyfill');

require('app-module-path').addPath(__dirname + '/src');

function noop() {
  return null;
}

require.extensions['.scss'] = noop;

const render = require('./render').default;
const app = express();

app.get('/', (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>Hello, SSR</title>
        <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport">
      </head>

      <body>
        <div id="root">${render()}</div>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3333, () => console.log('ready'));

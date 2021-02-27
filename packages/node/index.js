'use strict';
var https = require('https');

function makeRequest(path, resolve, reject) {

  const options = {
    hostname: 'b3api.vercel.app',
    path,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  const req = https.request(options, res => {

    if (res.statusCode >= 400)
      return reject(new Error(`HTTP ${res.statusCode} error!`));

    var body = '';
    res.setEncoding('utf8');
    res.on('data', chunk => body += chunk);
    res.on('end', () => resolve(JSON.parse(body)));

  });

  req.on('error', error => reject(new Error(error)));
  req.end();

}

module.exports = {
  assets: {
    get(ticker) {
      const path = `/api/assets/${ticker}`;
      return new Promise((resolve, reject) => makeRequest(path, resolve, reject));
    },
    getAll(tickers = []) {
      const query = tickers.length > 0 ? '?' + tickers.map(t => `tickers=${t}`).join('&') : '';
      const path = `/api/assets${query}`;
      return new Promise((resolve, reject) => makeRequest(path, resolve, reject));
    }
  }
};

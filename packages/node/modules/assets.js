'use strict';
const { makeRequest } = require('./utils')

module.exports = {
    get(ticker) {
        const path = `/api/assets/${ticker}`;
        return new Promise((resolve, reject) => makeRequest(path, resolve, reject));
    },
    getAll(tickers = []) {
        const query = tickers.length > 0 ? '?' + tickers.map(t => `tickers=${t}`).join('&') : '';
        const path = `/api/assets${query}`;
        return new Promise((resolve, reject) => makeRequest(path, resolve, reject));
    }
};

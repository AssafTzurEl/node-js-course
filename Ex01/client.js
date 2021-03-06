"use strict";

let http = require('http');

function callServer() {
    console.log("Calling server...");
    http.get('http://localhost:8080', resp => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log('Server replied: ' + data);
        });
    });
}

function request(count) {
    for (let index = 0; index < count; ++index) {
        callServer();
    }
}

module.exports = {
    request
};
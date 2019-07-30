"use strict";

const http = require('http');
const events = require('events');

let server = undefined;

// Emitter for error catching:
const errorEmitter = new events.EventEmitter();
errorEmitter.on('error',
    (err) => {
        console.error('Error: ' + err);
});

// Catching exceptions:
process.on('uncaughtException', (err) => {
    console.error('Error in server: ' + err);
});

function initServer() {
    server = http.Server(async (req, res) => {
        await sleep(2000);
        res.writeHead(200);
        res.end("Success");
    }).listen(8080);
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function endServer() {
    server.close();
}
  
module.exports = {
    init: initServer,
    end: endServer
};
"use strict";

let http = require('http');

let server = undefined;

async function initServer() {
    server = http.Server((req, res) => {
        setTimeout(() => {
            res.writeHead(200);
            res.end("Success");
        }, 2000);
    }).listen(8080);
}

function endServer() {
    server.close();
}
  
module.exports = {
    init: initServer,
    end: endServer
};

console.log("Starting server...");
initServer();

setTimeout(() => {
    endServer();
    console.log("Server shut down.");
}, 30000);

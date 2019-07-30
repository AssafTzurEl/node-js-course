"use strict";

const cluster = require('cluster');
const http = require('http');
const events = require('events');

const NUM_WORKERS = 4;

let server = undefined;

function initServer() {
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
      
        // Fork workers:
        for (let i = 0; i < NUM_WORKERS; i++) {
          cluster.fork();
        }
      
        cluster.on('exit', (worker, code, signal) => {
          console.log(`worker ${worker.process.pid} died`);
        });
      } else {
        server = http.Server(async (req, res) => {
            await sleep(2000);
            res.writeHead(200);
            res.end("Success");
        }).listen(8080);
          
        console.log(`Worker ${process.pid} started`);
      }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
function endServer() {
    if (server != undefined) {
        server.close();
        server = undefined;
    }
}
  
module.exports = {
    init: initServer,
    end: endServer
};

function run() {
    console.log("Starting server...");
    initServer();

    setTimeout(() => {
        endServer();
        console.log("Server shut down.");
    }, 20000);
}

run();
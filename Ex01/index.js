"use strict";

const server = require("./server");
const client = require("./client");

console.log("Starting server...");
server.init();
console.log("Starting client calls...");
client.request(10);
console.log("Client sent 10 requests.");

setTimeout(() => {
    server.end();
    console.log("The End.");
}, 5000);

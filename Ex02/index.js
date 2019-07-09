"use strict";

const server = require("./server1");
const client = require("./client1");
const childProcess = require("child_process");

console.log("Starting server...");
childProcess.exec("npm run server",
    function(error, stdout, stderr) {
        if (error) {
            console.log("Server error occurred: ", error.stack,
                error.code, error.signal);
        }
        console.log(`Server stdout: ${stdout}`);
        console.log(`Server stderr: ${stderr}`);
    }
);

console.log("Starting client...");
childProcess.exec("npm run client",
    function(error, stdout, stderr) {
        if (error) {
            console.log("Client error occurred: ", error.stack,
                error.code, error.signal);
        }
        console.log(`Client stdout: ${stdout}`);
        console.log(`Client stderr: ${stderr}`);
    }
);

setTimeout(() => {
    console.log("The End.");
}, 30000);

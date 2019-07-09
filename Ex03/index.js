"use strict";

const server = require("./server2");
const client = require("./client2");
const childProcess = require("child_process");

function startServer() {
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
}

function startClient() {
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
}

startServer();

setTimeout(() => {
    startClient();
}, 1000);

setTimeout(() => {
    console.log("The End.");
}, 30000);

#!/usr/bin/env node
"use strict"
const http = require('http');

console.time('Pinged server...');
process.stdout.write("Welcome to Ancient Greece API!");
process.stdin.read();
console.timeEnd('Pinged server...');
process.stdout.write('paideia');

const Koa = require('koa');
const app  = new Koa();

const logo =

/*

                 (_)          | |                                              (_)
  __ _ _ __   ___ _  ___ _ __ | |_    __ _ _ __ ___  ___  ___ ___    __ _ _ __  _
 / _` | '_ \ / __| |/ _ \ '_ \| __|  / _` | '__/ _ \/ _ \/ __/ _ \  / _` | '_ \| |
| (_| | | | | (__| |  __/ | | | |_  | (_| | | |  __/  __/ (_|  __/ | (_| | |_) | |
 \__,_|_| |_|\___|_|\___|_| |_|\__|  \__, |_|  \___|\___|\___\___|  \__,_| .__/|_|
                                      __/ |                              | |
                                     |___/                               |_|

*/

app.use(async ctx => { ctx.body = "Welcome to Ancient Greece API!";});
const HOST = "165.22.116.239";
const HTTP_PORT = 3000;

const httpServer = http.createServer(app.callback())
	.listen(HTTP_PORT, HOST, listeningReporter);

function listeningReporter ()
{
	const { address, port } = this.address();
	const protocol = "http";
	console.log(`Listening on ${protocol}://${address}:${port}`);
};

// milestone 1 : escape VIM and the server


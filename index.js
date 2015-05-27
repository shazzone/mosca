
module.exports.Server = require("./lib/server");
module.exports.Authorizer = require("./lib/authorizer");
module.exports.persistence = require("./lib/persistence");
module.exports.Stats = require("./lib/stats");

var port = (process.env.VCAP_APP_PORT || 5000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');

var mosca = require('mosca')
   
 var moscaSettings = {
   port: 1883,
 http: {
     port: 5000,
     bundle: true,
     //static: './'
   }
 };
 
 var server = new mosca.Server(moscaSettings);
 server.on('ready', setup);
 
 server.on('clientConnected', function(client) {
     console.log('client connected', client.id);     
 });
 
 // fired when a message is received
 server.on('published', function(packet, client) {
   console.log('Published', packet.payload);
 });
 
 // fired when the mqtt server is ready
 function setup() {
   console.log('Mosca server is up and running')
 }
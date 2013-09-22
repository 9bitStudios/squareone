/* Square One...
 * Source Application...
 */

var APPLICATION_ROOT = __dirname;
var PORT = 4711;

var express = require('express'); 
var mongoose = require('mongoose');
var path = require('path');

// Server
var server = express();

//Static content 
server.use(express.static(path.join( APPLICATION_ROOT, 'app')));

//Show all errors in development
server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// Routes


// Start server 

server.listen(PORT, '0.0.0.0', function() {
    console.log( 'Express server listening on port %d in %s mode', PORT, server.settings.env );
});
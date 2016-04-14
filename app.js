'use strict';

var config = require('./config');
var restify = require('restify');
var mongoose = require('mongoose');
var log = require('./services/log');
	

log.info('MongoDB connecting...');
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection
	.on('error', function(err) {
		log.error('MongoDB connection error: ' + err);
		process.exit(1);
	})
	.on('open', function() {
		log.info('MongoDB connection successful');
	});

if (config.seedDB) { require('./config/seed'); }

var server = restify.createServer({
	name: 'financial-api',
	log: log
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
require('./app/routes')(server);

server.listen(config.port, function () {
	log.info('Restify server listening on %d, in %s mode', config.port, config.env);
});
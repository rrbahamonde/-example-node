var methods = require("./methods");

module.exports = function(server) {
	server.post('/auth/login', methods.login );
	server.post('/auth/register', methods.register );
};
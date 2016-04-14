var methods = require("./methods");

module.exports = function(server) {
	server.get('api/account', methods.list);
	server.get('/api/account/:id', methods.detail);
	server.post('/api/account', methods.create);
	server.put("/api/account/:id", methods.update);
	server.del("/api/account/:id", methods.delete);
};
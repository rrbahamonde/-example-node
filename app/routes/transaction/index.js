var methods = require("./methods");

module.exports = function(server) {
	server.get('api/transaction', methods.list);
	server.get('/api/transaction/:id', methods.detail);
	server.post('/api/transaction', methods.create);
	server.put("/api/transaction/:id", methods.update);
	server.del("/api/transaction/:id", methods.delete);
};
var methods = require("./methods");

module.exports = function(server) {
	server.get('api/card', methods.list);
	server.get('/api/card/:id', methods.detail);
	server.post('/api/card', methods.create);
	server.put("/api/card/:id", methods.update);
	server.del("/api/card/:id", methods.delete);
};
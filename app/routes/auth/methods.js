var Client = require('../../model/Client');
var auth = require('../../../services/auth');

exports.login = function(req, res) {
	Client.findOne({"email": req.body.email, "password": req.body.password }).lean().then(function(client){
		if(client){
			client.access_token = auth.generateToken(String(body._id));
			res.send(client);
		}else{
			res.status(401).send({});
		}
	})
	.catch(function(reason) {
		console.log(reason);
	});
}

exports.register = function(req, res){
	Client.create(req.body).then(function(body){
		res.send(body);
	})
	.catch(function(reason) {
		console.log(reason);
	});
}
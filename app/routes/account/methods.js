var Account = require('../../model/Account');
var _ = require('lodash');

exports.list = function(req, res) {
		Account.find({}).then(function(models){
			res.send(models);
		});
}

exports.detail = function(req, res) {
	Account.findById(req.params.id).then(function(models){
		res.send(models);
	})
}

exports.create = function(req, res) {
		Account.create(req.body.body).then(function(model){	
			res.send(model);
		});
}

exports.delete = function(req, res){
	Account.remove({ _id: req.params.id }).then(function(model){
		res.sendStatus(204);
	});
}


exports.update = function(req, res) {
	Account.findById( req.params.id ).lean().then(function(model){
		_.merge(model, body);
		model.save(function(err){
			res.send(model);
		});
	});
};	
var Transaction = require('../../model/Transaction');
var _ = require('lodash');

exports.list = function(req, res) {
		Transaction.find({}).then(function(models){
			res.send(models);
		});
}

exports.detail = function(req, res) {
	Transaction.findById(req.params.id).then(function(models){
		res.send(models);
	})
}

exports.create = function(req, res) {
		Transaction.create(req.body.body).then(function(model){	
			res.send(model);
		});
}

exports.delete = function(req, res){
	Transaction.remove({ _id: req.params.id }).then(function(model){
		res.sendStatus(204);
	});
}


exports.update = function(req, res) {
	Transaction.findById( req.params.id ).lean().then(function(model){
		_.merge(model, body);
		model.save(function(err){
			res.send(model);
		});
	});
};
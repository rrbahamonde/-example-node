var jwt = require('jsonwebtoken');
const secret = "2as53DEdD2857238E";
const expire_seconds = 3600;

exports.checkClient = function(req, res, next){
	var token = req.header('Authorization') || (req.query.token || null);
	return jwt.verify(token, secret, function(err, decoded) {
		if(err){
			res.status(400).send({error: {code:01, message: "Bad Request"} });
		}else{
			req.userId = decoded.user_id;
		}

		next();
	});
}

exports.generateToken = function(id){
	return jwt.sign({ user_id: id }, secret, { expiresIn: expire_seconds });
}
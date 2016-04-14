'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:{ type:String, required:true },
	email: { type: Schema.Types.ObjectId, ref: 'User', required:true, unique: true  },
	password: { type:String, required:true }
});

module.exports = mongoose.model('User', UserSchema );
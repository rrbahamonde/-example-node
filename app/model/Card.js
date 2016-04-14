'use strict';

//Tarjeta de Credito
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CardSchema = new Schema({
	name: { type:String, required:true },
	label: { type:String, required:true },
	limit: { type:String, required:true }
});

module.exports = mongoose.model('Card', CardSchema );
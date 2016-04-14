'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//ingreso / egreso
var TransactionSchema = new Schema({
	name: { type:String, required:true },
	type: { type:String, required:true },
	money: { type: Number, required:true },
	rangePay: { timeStart: Date, timeEnd: Date, per:Number  },
	creditCard: { type: Schema.Types.ObjectId, ref: 'Card', default: null },
	user: { type: Schema.Types.ObjectId, ref: 'User', required:true },
	category: {type: Schema.Types.ObjectId, ref: 'Category', required:true }, 
	account: { type: Schema.Types.ObjectId, ref: 'Account', required:false },
	createdOn: { type: Date, default: Date.now, required: true },
	updatedOn: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema );
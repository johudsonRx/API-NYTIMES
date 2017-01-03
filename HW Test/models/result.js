var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultSchema = new Schema({
  result: {
    type: String,
  },
  date: {
  	type: Date
  }
});

var Result = mongoose.model('Result', ResultSchema);
module.exports = Result;

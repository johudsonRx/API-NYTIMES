var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TermSchema = new Schema({
  term: {
    type: String,
  },
  date: {
  	type: Date
  }
});

var Term = mongoose.model('Term', TermSchema);
module.exports = Term;

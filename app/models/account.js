/**
 * Created by mancos on 2017/3/2.
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  _id: {type: Schema.Types.ObjectId, required: true},
  phone: {type: String, required: false},
  LastLoginTime: {type: String, required: false},
  LoginDay: {type: String, required: false}

});



mongoose.model('account', ArticleSchema);

var mongoose = require('mongoose');
var Schema = mongooose.Schema;

var postSchema = new Schema({
  postTitle: String,
  postDate: Date,
  postBody: String,
})

var Post = mongoose.model('Entry', postSchema);

module.exports = Post;

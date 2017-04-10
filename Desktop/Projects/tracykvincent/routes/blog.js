var router = require('express').Router();

var Post = require('../models/post.js');

router.post('/', function(request, response) {
  console.log('creating new post');
  var data = request.body;

    var newPost = new Post({
      postTitle: data.postTitle,
      postDate: data.postData,
      postBody: data.postBody
    });
      newPost.save(function(err){
        if (err) {
          console.log('save err ', err);
          response.sendStatus(500);
        } else {
          response.sendStatus(200);
        }
      })
    })
module.exports = router;

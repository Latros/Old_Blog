/**
 * PostController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  submit: function(req, res) {
    res.view();
  },

  create: function(req, res, next) {

    Post.create( req.params.all(), function postCreated (err, post) {
      // If there's an error in creating the user (I.E. failed validation, etc)
      if (err) {

        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/post/submit');
      }

      // If there is no error (if it get's this far in the create method, that's a given)
      // redirect to the view to see the newly created post
      res.redirect('/post/view/'+post.id);
    });
  },

  view: function(req, res, next) {
    Post.findOne(req.param('id'), function foundPost (err, post) {
      if ( err ) return next(err);
      if ( !post ) return next();
      res.view({
        post: post
      });
    });
  },

  index: function(req, res, next) {
    Post.find(function foundPosts (err, posts) {
      if (err) return next(err);

      posts.sort().reverse();

      res.view({
        posts: posts
      });
    });
  },

  edit: function(req, res, next) {
    Post.findOne(req.param('id'), function foundPost (err, post) {
      if (err) return next(err);
      if (!post) return next();

      res.view({
        post: post
      });
    });
  },

  update: function(req, res, next) {
    Post.update(req.param('id'), req.params.all(), function postUpdated (err) {
      if (err) {
        return res.redirect('/post/edit' + req.param('id'));
      }

      res.redirect('/post/view/' + req.param('id'));
    });
  }
};

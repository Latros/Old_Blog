/**
 * CommentController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /**
   * /comment/create
   */

  create: function(req, res, next) {

    Comment.create( req.params.all(), function commentCreated (err, comment) {
      // If there's an error in creating the comment (I.E. failed validation, etc)
      if (err) {
        console.log(err);
        return res.redirect('/read/' + comment.post_slug);
      }

      // If there is no error (if it get's this far in the create method, that's a given)
      // redirect to the view to see the newly created post
      res.redirect('/read/'+comment.post_slug + "?comment=true");
    });
  }

};

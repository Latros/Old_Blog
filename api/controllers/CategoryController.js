/**
 * CategoryController
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

  /*
   * /category/list
   */
  list: function (req,res) {

    //TODO: category view page

    res.view();
  },


  /*
   * /category/:category
   */
  category: function(req, res, next) {

    var category = req.param('category');

    Post
    .findByCategory(category).sort('createdAt')
    .exec(function (err, categoryposts) {

      if (err) return res.serverError(err);
      if (!categoryposts) return next();

      categoryposts.reverse();

      res.view({
        categoryposts: categoryposts,
        category: category
      });
    });
  }

};

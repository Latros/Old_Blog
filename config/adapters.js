/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {
  /*
   *
   * v-------- change this for deployment / dev --------v
   *
   */
  'default': 'mongolive',
  /*
   * ^-------- / end --------^
   */

  memory: {
    module: 'sails-memory'
  },

  disk: {
    module: 'sails-disk'
  },

  /*
   *
   * v-------- change this for deployment / dev --------v
   *
   */
  mongolive: {
    module : 'sails-mongo',
    url: 'mongodb://blog-live:D@T@shep123]@paulo.mongohq.com:10060/blog-live',
    schema: true
  }
  // mongodev: {
  //   module : 'sails-mongo',
  //   url: 'mongodb://blog-dev:D@T@shep123]@paulo.mongohq.com:10046/blog-dev',
  //   schema: true
  // }
  /*
   * ^-------- / end --------^
   */
};

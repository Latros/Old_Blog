/**
 * Comment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  schema: true,

  attributes: {

    post_slug: {
      type: 'STRING',
      required: true
    },

    name: {
      type: 'STRING',
      required: true
    },

    email: {
      type: 'STRING',
      required: true
    },

    comment: {
      type: 'STRING',
      required: true
    },

    approved: {
      type: 'BOOLEAN',
      defaultsTo: false
    }

  }

};

/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  schema: true,

  attributes: {

    title: {
      type: 'string',
      unique: true,
      required: true
    },

    content: {
      type: 'string',
      required: true
    },

    author: {
      type: 'string',
      required: true
    },

    icon: {
      type: 'string',
      required: true
    },

    category: {
      type: 'string',
      required: true
    }

  }

};

/**
 * Local environment settings
 *
 * While you're developing your app, this config file should include
 * any settings specifically for your development computer (db passwords, etc.)
 * When you're ready to deploy your app in production, you can use this file
 * for configuration options on the server where it will be deployed.
 *
 *
 * PLEASE NOTE:
 *		This file is included in your .gitignore, so if you're using git
 *		as a version control solution for your Sails app, keep in mind that
 *		this file won't be committed to your repository!
 *
 *		Good news is, that means you can specify configuration for your local
 *		machine in this file without inadvertently committing personal information
 *		(like database passwords) to the repo.  Plus, this prevents other members
 *		of your team from commiting their local configuration changes on top of yours.
 *
 *
 * For more information, check out:
 * http://sailsjs.org/#documentation
 */

module.exports = {

  /*
   *
   * v-------- change this for deployment / dev --------v
   *
   */
  // port: 80,
  port: 1337,
  /*
   * ^-------- / end --------^
   */



  /*
   *
   * v-------- change this for deployment / dev --------v
   *
   */
  // host: 'samstil.es',
  host: 'localhost',
  /*
   * ^-------- / end --------^
   */


  // There is no NODE_ENV variable on my local PC, so on my local
  // PC, it will always be development. Otherwise, when deploying,
  // there IS a process.env.NODE_ENV variable on jitsu -- it's
  // production -- therefore live (deployment) will always be in
  // production mode.
  // -----------------------------
  environment: process.env.NODE_ENV || 'development'
};

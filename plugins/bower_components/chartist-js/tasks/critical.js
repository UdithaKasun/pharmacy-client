/**
 * critical
 * ========
 *
 * Use critical to inline above the fold critical CSS during the build process.
 *
 * Link: https://github.com/bezoerb/grunt-critical
 */

'use strict';

module.exports = function (grunt) {
  return {
    public: {
      options: {
        base: './',
        css: '<%= pkg.config.public %>/css/main.css',
        width: 320,
        height: 3000
      },
      src: '<%= pkg.config.public %>/login.html',
      dest: '<%= pkg.config.public %>/login.html'
    }
  };
};

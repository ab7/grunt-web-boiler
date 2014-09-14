/*global module*/

module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      options: {
        cascade: false
      },
      single_file: {
        src: 'static/styles/main.css',
        dest: 'static/styles/main.prefixed.css'
      }
    },
    concat: {
      dist: {
        src: [ 'static/js/vendor/*.js', 'static/js/main.js'],
        dest: 'static/js/main.built.js'
      }
    },
    cssmin : {
      css: {
        src: 'static/styles/main.prefixed.css',
        dest: 'static/styles/main.prefixed.min.css'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'static/styles/main.css': 'static/styles/sass/main.scss'
        }
      }
    },
    uglify : {
      js: {
        files: {
          'static/js/main.built.min.js' : ['static/js/main.built.js']
        }
      }
    },
    watch: {
      css: {
        files: ['static/styles/sass/main.scss', 'static/styles/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin']
      },
      js: {
        files: ['static/js/main.js', 'static/js/vendor/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'watch']);
};

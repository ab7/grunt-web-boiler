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
        dest: 'dist/main.min.css'
      }
    },
    concat: {
      js: {
        src: ['static/js/modules/*.js', 'static/js/main.js'],
        dest: 'dist/main.min.js'
      },
      css: {
        src: ['static/styles/normalize.css', 'static/styles/main.css'],
        dest: 'dist/main.min.css'
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: 'static/img/*',
        dest: 'dist/img',
        filter: 'isFile'
      }
    },
    cssmin : {
      css: {
        src: 'dist/main.min.css',
        dest: 'dist/main.min.css'
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },
    sass: {
      options: {
        style: 'expanded'
      },
      files: {
        'static/styles/main.css': 'static/styles/sass/main.scss'
      }
    },
    uglify : {
      my_target: {
        files: {
          'dist/main.min.js' : ['dist/main.min.js']
        }
      }
    },
    watch: {
      css: {
        files: ['static/styles/sass/main.scss', 'static/styles/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['static/js/main.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['index.html'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // custom tasks
  grunt.registerTask('checkJS', function () {
    var jsFile;
    jsFile = grunt.file.read('dist/main.min.js');
    if (jsFile === "") {
      grunt.file.delete('dist/main.min.js');
    }
  });

  // main tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('pro', [
    'sass',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'processhtml',
    'checkJS'
  ]);
};

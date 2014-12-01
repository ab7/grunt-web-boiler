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
        src: 'dist/static/main.min.css',
        dest: 'dist/static/main.min.css'
      }
    },
    concat: {
      js: {
        src: ['static/js/modules/*.js', 'static/js/main.js'],
        dest: 'dist/static/main.min.js'
      },
      css: {
        src: ['static/styles/normalize.css', 'static/styles/main.css'],
        dest: 'dist/static/main.min.css'
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: 'static/img/*',
        dest: 'dist/static/img',
        filter: 'isFile'
      }
    },
    cssmin : {
      css: {
        src: 'dist/static/main.min.css',
        dest: 'dist/static/main.min.css'
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      },
      noJS: {
        files: {
          'dist/index.html': ['index.html']
        }
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
      my_target: {
        files: {
          'dist/static/main.min.js' : ['dist/static/main.min.js']
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
        files: ['static/js/main.js', 'static/js/modules/*.js'],
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
    jsFile = grunt.file.read('dist/static/main.min.js');
    if (jsFile === "") {
      grunt.file.delete('dist/static/main.min.js');
      grunt.task.run('processhtml:noJS');
    } else {
      grunt.task.run('processhtml:dist');
    }
  });

  // main tasks
  grunt.registerTask('dev', [
    'sass',
    'watch'
  ]);
  grunt.registerTask('pro', [
    'sass',
    'concat',
    'autoprefixer',
    'cssmin',
    'uglify',
    'copy',
    'checkJS'
  ]);
};

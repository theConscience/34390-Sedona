module.exports = function(grunt) {

  //grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.loadNpmTasks('grunt-combine-media-queries');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-lintspaces');
  //grunt.loadNpmTasks('grunt-csscomb');
  //grunt.loadNpmTasks('grunt-watchs');

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    clean: {
      build: ["build","source/css"]
    },

    watch: {
      watch_sass: {
        files: ['source/**/*.scss','source/index.html'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "font/**",
            "img/**",
            "js/**",
            "sedona_feedback_page/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },

    sass: {
      style_config: {
        files: {
          "build/css/style.css": ["source/sass/style.scss"],
          "source/css/style.css": ["source/sass/style.scss"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style_config: {
        src: "build/css/style.css"
      }
    },

    cmq: {
      style_config: {
        files: {
          "build/css/style.css": ["build/css/style.css"],
          "source/css/cmq/": ["source/css/style.css"]
        }
      }
    },

    cssmin: {
      style_config: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images_config: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    svginject: {
      images_config_source: {
        options: {},
        files: {
          "source/js/SVGinject.js": ["source/img/calendar.svg","source/img/plus.svg", "source/img/minus.svg"]
        }
      },
      images_config_build: {
        options: {},
        files: {
          "build/js/SVGinject.js": ["build/img/calendar.svg","build/img/plus.svg", "build/img/minus.svg"]
        }
      }
    },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttribures: true,
        caseSensitive: true,
        keepClosingSlash: false
      },
      html_config: {
        files: {
          "build/index.min.html": "build/index.html"
        }
      }
    },

    replace: {
      build: {
        options: {
          patterns: [{
            match: /[\"\']img\//g,
            replacement: '"static/img/'
          }, {
            match: /\simg\//g,
            replacement: ' static/img/'
          }, {
            match: /[\"\']css\//g,
            replacement: '"static/css/'
          }, {
            match: /\scss\//g,
            replacement: ' static/css/'
          }, {
            match: /[\"\']js\//g,
            replacement: '"static/js/'
          }, {
            match: /\sjs\//g,
            replacement: ' static/js/'
          }, {
            match: /[\"\']font\//g,
            replacement: '"static/font/'
          }, {
            match: /\sfont\//g,
            replacement: ' static/font/'
          }]
        },
        files: [{
          expand: true,
          src: [
            "build/css/style.css",
            "build/index.html"
          ]
        }]
      }
    },

    csscomb: {
      all_sass_resort: {
        expand: true, //чтобы грант раскрывал путь
        src: ["source/sass/**/*.scss"] //любой scss файл в папке и всех её подпапках
      },
      css_resort: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    }

  });


  grunt.registerTask('lint', ['lintspaces']);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'autoprefixer',
    'cmq',
    //'replace',
    'cssmin',
    'imagemin',
    'svginject:images_config_build',
    'htmlmin',
    'csscomb:css_resort'
  ]);

};

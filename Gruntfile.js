module.exports = function(grunt) {
	
  // Project configuration. 
  grunt.initConfig({
	browserify: {
      build: {
        src: 'js/main.js',
        dest: 'build/js/bundle.js'
      }
    },
    concat: {      
      js: {
        src: ['build/**/*.js'],
        dest: 'web/js/output.js',
      },
	  css: {
        src: ['build/**/*.css'],
        dest: 'web/css/output.css'
      }
    },	
	cssmin: {
	  target: {
		files: [{
		  expand: true,
		  cwd: 'web/css',
		  src: ['*.css', '!*.min.css'],
		  dest: 'web/css',
		  ext: '.min.css'
		}]
	  }
	},
	sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
		  src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
	uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
          'web/js/output.min.js': ['web/js/output.js']
        }
      }
    },
	watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js', 'uglify']
	  },
	  css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css', 'cssmin']
	  },
	  buildJS: {
        files: ['build/**/*.js'],
        tasks: ['uglify']
	  },
	  buildCSS: {
        files: ['build/**/*.css'],
        tasks: ['cssmin']
	  }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['browserify', 'sass', 'concat', 'cssmin', 'uglify', 'watch']);  
};
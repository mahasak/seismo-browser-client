module.exports = function(grunt) {
	grunt.initConfig({
		meta: {
			version: '0.0.1'
		},

		jshint: {
			options: {
				"asi" : false,
				"bitwise" : true,
				"boss" : false,
				"curly" : true,
				"debug": false,
				"devel": false,
				"eqeqeq": true,
				"evil": false,
				"expr": true,
				"forin": false,
				"immed": true,
				"latedef" : false,
				"laxbreak": false,
				"multistr": true,
				"newcap": true,
				"noarg": true,
				"node" : true,
				"browser": true,
				"noempty": false,
				"nonew": true,
				"onevar": false,
				"plusplus": false,
				"regexp": false,
				"strict": false,
				"sub": false,
				"trailing" : true,
				"undef": true,
				"unused": "vars",
				globals: {
					angular: true,
					require: true,
					define: true
				}
			},
			js: ['src/**/*.js']
		},

		browserify: {
			dist: {
				files: {
					'client.js': ['src/**/*.js']
				}
			}
		},

		uglify: {
			my_target: {
				options: {
					sourceMap: 'client.map.js'
				},
				files: {
					'client.min.js': ['client.js']
				}
			}
		}
	});

	// Laoded tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};

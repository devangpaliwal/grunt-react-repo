var config = require('./gruntconfigs');

module.exports = function(grunt) {

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);
	
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'jshint': config.jshint,
        'browserify': config.browserify,
		'watch': config.watch,
		'less': config.less,
		'concurrent' : config.concurrent,
		'nodemon': config.nodemon,
        'exorcise' : config.exorcise,
        'cachebuster':config.cachebuster,
        'replace':config.replace
	});
	
    // task setup 
    grunt.registerTask('build', ['browserify','less','exorcise']);
    grunt.registerTask('default', ['concurrent']);

    //grunt.registerTask('cdn',['cachebuster']);
};
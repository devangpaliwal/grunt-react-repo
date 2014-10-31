module.exports = {
			less:{
				files: ['./lib/less/**/*.less'],
				tasks: ['less']
			},
			js:{
				files: ['./lib/**/*.jsx','./lib/**/*.js', './browser/**/*.js*'],
				tasks: ['browserify','exorcise']	
			}
		}
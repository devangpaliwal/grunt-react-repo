module.exports = {
			options: {
		    	debug: true,
		    	transform: ['reactify','es6ify'],
		    	extensions: ['.jsx'],
		    	browserifyOptions: {
       				  debug: true
      			}
		  	},
		  	main: {
		  		options: {
		      		debug: true
		    	},
		    	'src': ['./browser/index.js'],
		    	'dest': './public/javascripts/bundle.js',
		  	}
		}
module.exports = {
	dev:{
		options: {
	    	paths: ["./lib/less"]
		},
    	files: {
    		"./public/stylesheets/bundle.css": "./lib/less/**/*.less"
    	}	
	}
}
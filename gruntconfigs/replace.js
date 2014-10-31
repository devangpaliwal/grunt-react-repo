var glob = require('glob'),
	_ = require('underscore');
module.exports = {
      dist: {
        options: {
          patterns: patterns()
        },
        files: [
          {expand: true, flatten: true, src: ['public/stylesheets/**/*'], dest: 'public/stylesheets/'}
        ]
      }
    }

function patterns(){

	var filenames = glob.sync("./public/images/**/*.jpg");
	var pat = [];

	var patRet = _.map(filenames,function(filename){
		return {
			"match": new RegExp("/"+ ( _.rest(filename.split('/'),2)).join('/') , 'g') ,
			"replacement": "WOWOWOWOWOWOOWOW"
		}
	});

	console.log(JSON.stringify(patRet));
	// Read all image files and replace

	return patRet;
}    
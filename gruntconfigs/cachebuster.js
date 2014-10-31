var path = require('path'),
	_ = require('underscore'),
	fs = require('fs');
module.exports = {
	dev:{
		options: {
      		'basedir'   : "./public",
      		formatter: function(hashes) {
                var output = '{\n',
                	basename, arr, hashifiedName,
					src= __dirname+"/../public/",
					dest = __dirname+"/../dist/";	

                for (var filename in hashes) {
                	baseName = path.basename(filename);
                	arr = baseName.split('.');
					if(_.indexOf( ['js','css','png','jpg'] , _.last(arr) ) !=-1 ){
                		hashifiedName = _.initial(arr) + '.' + hashes[filename] + '.' + _.last(arr);
                		output += '"' +filename + '":"' +  hashifiedName + '",\n';
                		fs.writeFileSync( dest+hashifiedName, fs.readFileSync(src+filename, "utf8"), "utf8" );
					}
				}
                output = output.replace(/,\s*$/, ""); // replaces last comma
                output = output + "\n}"
                return output;
            }
      	},
   		src: 'public/**/*',
        dest: 'dist/cachebusters.json'
	}
}
/**
* @jsx React.DOM
*/

require('node-jsx').install({extension: '.jsx'})
var React = require('react');
var Main = React.createFactory(require('../lib/main.jsx'));


function capsuleHandler(req,res){
	var markup = React.renderToString(Main());
	res.render('index', {
		content: markup
	})

}


module.exports = capsuleHandler;
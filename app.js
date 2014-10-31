var express = require('express');
var app = express();


//app.use(express.static('public', {}));

app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.set('views', __dirname + '/views');

app.use("/public", express.static(__dirname + "/public"));

app.use('/capsules', require('./routes'));













// Error Handling for dev

if (app.get('env') === 'development') {
 app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
  });
 
}

// Error Handling for prod

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
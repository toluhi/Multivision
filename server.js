/**
 * Created by yemi-t on 16/08/2014.
 */
var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));


if(env === 'development') {
    mongoose.connect('mongodb://localhost/multivision');
}
else {
    mongoose.connect('mongodb://yemi:toluhi@ds063449.mongolab.com:63449/multivisiontol');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
    console.log('multivision db opened');
});

var messageSchema = mongoose.Schema({message:String});
var Message = mongoose.model('Message', messageSchema);


app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('listening on port ' + port);

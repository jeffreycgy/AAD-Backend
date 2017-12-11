const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

let url = 'mongodb://localhost:27017/user';
let port = 3000;

var routes = require('./routes/index'); // index page
var users = require('./routes/users'); // user page

app.set('views', path.join(__dirname, 'views'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => 
console.log('Example app listening on port 3000!'));

MongoClient.connect(url, (err,db)=>{
 if(err) return console.dir(err);
 console.log('connected to mongodb');
}); 

app.use('/', routes);
app.use('/users', users);
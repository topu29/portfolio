const express = require('express');
var path = require('path')
const mongoose = require('mongoose')
http = require('http');
const bodyParser = require('body-parser');
const Comments = require('./models/commentModel');
const hostname = 'localhost';
const port = 3001;

const url = 'mongodb://localhost:27017/FeedBack';
const connect = mongoose.connect(url)

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());

app.post('/post-feedback',function(req,res){
  connect.then((db) => {
    Comments.create(req.body)
    .then((dish) => {
        console.log('Comments Logged\n', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
}, (err) => { console.log(err); });

    //res.send('Data received\n'+JSON.stringify(req.body))

});




const server = http.createServer(app);

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});


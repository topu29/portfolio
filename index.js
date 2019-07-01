const express = require('express');
const mongoose = require('mongoose')
http = require('http');
const bodyParser = require('body-parser');
//const Data = require('./model/getData');
const getRouter = require('./routes/getRouter');
const hostname = 'localhost';
const port = 3000;

const url = 'mongodb://localhost:27017/Portfolio';
const connect = mongoose.connect(url, {
    useMongoClient: true,
    /* other options */
  });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/save', getRouter);

app.use((req, res, next) => {
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
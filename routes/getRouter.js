const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Data = require('../model/getData');

const dataRouter = express.Router();

dataRouter.use(bodyParser.json());
dataRouter.route('/save')

.post((req, res, next) => {
    Data.create(req.body)
    .then((dish) => {
        console.log('Data Saved', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})


module.exports = dataRouter;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var feedBackData = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
var Data = mongoose.model('Data_Field', feedBackData);

module.exports = Data;
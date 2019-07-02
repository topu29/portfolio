const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var CommentSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_message: {
        type: String,
        required: true
    },
    user_subject: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
var Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;
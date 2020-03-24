var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    goals: [{
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;

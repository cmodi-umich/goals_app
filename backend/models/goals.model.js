var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var goalSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    type_of_goal: { // make choose from a few different values in the frontend
        type: String,
        required: true
    },
    complete_date: {
        type: Date,
        required: true
    }, 
    steps: [{
        type: Schema.Types.ObjectId,
        ref: 'Step'
    }]
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var stepSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    }, 
    goal_id: {
        type: Schema.Types.ObjectId,
        ref: "Goal",
        required: true
    }
});

var Step = mongoose.model('Step', stepSchema);

module.exports = Step;
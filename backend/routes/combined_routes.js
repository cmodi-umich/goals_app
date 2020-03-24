const router = require('express').Router();
let User = require('../models/users.model');
let Goal = require('../models/goals.model');
let Step = require('../models/steps.model');


// TODO: make delete user function when needed

// adding and listing all users 
router.route('/users').get( (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/users').post( (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error' + err));
});

// adding and listing goals for certain user ID
router.route('/users/:id').get( (req, res) => {
    User.findOne( {_id: req.params.id} )
        .populate("goals")
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/users/:id').post( (req, res) => {
    Goal.create(req.body)
        .then( goal => { return User.findOneAndUpdate({ _id: req.params.id }, {$push: {goals: goal._id}}, { new: true }) })
        .then( goal => res.json(goal))
        .catch( err => res.json('Error' + err));
});


// list all goals
router.route('/goals').get( (req, res) => {
    Goal.find()
        .then(goals => res.json(goals))
        .catch(err => res.status(400).json('Error' + err));
});

// adding and listing steps for certain goal ID
router.route('/goals/:id').get( (req, res) => {
    Goal.findOne( {_id: req.params.id} )
        .populate("steps")
        .then(goal => res.json(goal))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/goals/:id').post( (req, res) => { // create a new step
    const event = req.body.event;
    const due_date = req.body.due_date;
    const goals_id = req.params.id;

    const new_step = new Step({event, due_date});
    new_step.goal_id = goals_id; // manually set a goal ID
    
    new_step.save()
            .then( () => {
                return Goal.findOneAndUpdate({ _id: req.params.id }, {$push: {steps: new_step._id}}, { new: true }) // add to goals step array
            })
            .then( () => {
                res.status(200).json(new_step);
            })
            .catch( err => res.json('Error' + err));
});


router.route('/goals/:id').delete( (req, res) => {
    Goal.findOneAndDelete( {_id: req.params.id} )
        .then(goal => {
            var step;
            for(step of goal.steps) { // for each step in goals.steps
                Step.findByIdAndDelete(step); // delete the step
            }
        })
        .then(() => res.json("success: true"))
        .catch(err => res.status(400).json('Error' + err));
})


// list all steps
router.route('/steps').get( (req, res) => {
    Step.find()
        .then(steps => res.json(steps))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/steps/:id').delete( (req, res) => {
    Step.findOneAndDelete({ _id: req.params.id })
        .then( step => {
            Goal.findOneAndUpdate({ _id: step.goal_id }, {$pull: {steps: step._id}})
        })
        .then(res.status(200).json("success: true"))
});


module.exports = router;
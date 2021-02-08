const router = require('express').Router();
let Planner = require('../models/planner.model');

router.route('/').get((req, res) => {
  Planner.find()
    .then(planners => res.json(planners))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const text = req.body.text;
  const completed = req.body.completed;
  const date = Date.parse(req.body.date);

  const newPlanner = new Planner({
    username,
    description,
    date,
  });

  newPlanner.save()
  .then(() => res.json('Plan added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Planner.findById(req.params.id)
    .then(planner => res.json(planner))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Planner.findByIdAndDelete(req.params.id)
    .then(() => res.json('Plan deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Planner.findById(req.params.id)
    .then(planner => {
      planner.username = req.body.username;
      planner.text = req.body.text;
      planner.completed = req.body.completed;
      planner.date = Date.parse(req.body.date);

      planner.save()
        .then(() => res.json('Plan updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

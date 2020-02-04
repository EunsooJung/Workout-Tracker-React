const router = require('express').Router();

let User = require('../models/user.model');

// Route landing page to handle incomming http get request
router.route('/').get((req, res) => {
  // Find all users from MongoDB
  // find() method returned promise
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  //
  const username = req.body.username;

  const newUser = new User({ username });
  // Add new user to MogoDB
  newUser
    .save()
    .then(() => {
      res.json('User added!');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

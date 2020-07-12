const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/userModel');

/* GET users listing. */

router.get('/', (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  User.find()
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/', (req, res, next) => {
  if (req.body) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/:id', (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name field is required'],
  },
  email: {
    type: String,
    required: [true, 'The email field is required'],
  },
  role: {
    type: String,
    required: [true, 'The role field is required'],
  },
});

//create model for user
const User = mongoose.model('user', UserSchema);

module.exports = User;

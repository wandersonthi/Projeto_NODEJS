const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, unique: true},
  password: String
});

module.exports = mongoose.model('User', userSchema)
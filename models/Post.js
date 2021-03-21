const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter title'],
    trim: true,
    minLength: [5, 'Title has to be atleast 5 characters'],
  },
  message: {
    type: String,
    required: [true, 'Message cannot be empty'],
  },
  name: {
    type: String,
  },
  creator: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Post', postSchema);

const Post = require('../models/Post.js');
const mongoose = require('mongoose');

// @desc    Fetch all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
// @desc    Fetch single post
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

*/

// @desc    Delete a post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No such post`);

    await Post.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a post
exports.createPost = async (req, res) => {
  try {
    const createdPost = await Post.create({
      ...req.body,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a post
exports.updatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send(`No post found!`);
    }

    post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

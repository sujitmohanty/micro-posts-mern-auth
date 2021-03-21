const ErrorHandler = require('../utils/errorHandler');
const asyncHandler = require('express-async-handler');
const Post = require('../models/Post.js');

// @desc    Fetch all posts
exports.getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  res.status(200).json(posts);
});

/*

// @desc    Fetch single post
exports.getSinglePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler('Post not found', 404));
  }

  res.status(200).json(post);
});

*/

// @desc    Delete a post
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler('Post not found', 404));
  }

  await post.remove();

  res.status(200).json({
    message: 'Post was deleted.',
  });
});

// @desc    Create a post
exports.createPost = asyncHandler(async (req, res) => {
  const createdPost = await Post.create({
    ...req.body,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  res.status(201).json(createdPost);
});

// @desc    Update a post
exports.updatePost = asyncHandler(async (req, res) => {
  let post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler('Post not found', 404));
  }

  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json(post);
});

const Post = require('../models/Post.js');

// @desc    Fetch all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/*
// @desc    Fetch single post
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(new ErrorHandler('Post not found', 404));
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

*/

// @desc    Delete a post
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(new ErrorHandler('Post not found', 404));
    }

    await post.remove();

    res.status(200).json({
      message: 'Post was deleted.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
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
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Update a post
exports.updatePost = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

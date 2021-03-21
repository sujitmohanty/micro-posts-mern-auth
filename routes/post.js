const express = require('express');
const router = express.Router();

const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

router.route('/posts').get(getPosts);
router.route('/posts/new').post(auth, createPost);
router.route('/posts/:id').patch(auth, updatePost);
router.route('/posts/:id').delete(auth, deletePost);

module.exports = router;

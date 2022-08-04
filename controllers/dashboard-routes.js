const express = require("express");
const router = express.Router();
const {User, Post, Comment} = require("../models");
const withAuth = require('../utils/auth');


// "/" get route
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{model: User}],
      limit: 3,
      order: [['updated_at', 'DESC']]
    }); 

    const commentData = await Comment.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{model: User}],
      limit: 3, 
      order: [['updated_at', 'DESC']]
    });
    
    const posts = postData.map(post => post.get({ plain: true }));
    const comments = commentData.map(comment => comment.get({ plain: true }));

    res.render("./dash/overview", {
      posts, comments, loggedIn: req.session.loggedIn
    });

  } catch (error) {
    res.status(500).json(error);
  }
})

// "/posts" get route
router.get("/posts", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{model: Comment, order: [['updated_at', 'DESC']]}], 
      order: [['updated_at', 'DESC']]
    }); 

    const posts = postData.map(post => post.get({ plain: true }));
    res.render("./dash/show-posts", {
      posts, loggedIn: req.session.loggedIn
    });

  } catch (error) {
    res.status(500).json(error);
  }
})

// "/comments" get route
router.get("/comments", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{model: User}],
      order: [['updated_at', 'DESC']]
    });

    const comments = commentData.map(comment => comment.get({ plain: true }));

    res.render("./dash/show-comments", {
      comments, loggedIn: req.session.loggedIn
    });

  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;
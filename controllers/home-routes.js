const express = require("express");
const router = express.Router();
const {User, Post, Comment} = require("../models");

// "/" get route
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: Comment, include: {model: User}}, {model: User}],
      order: [['updated_at', 'DESC']]
    });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render("homepage", {
      posts, 
      loggedIn: req.session.loggedIn
    });
    
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/login" get route
router.get("/login", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("login");
  }
})

// "/posts/:id" get route
router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: Comment, include: {model: User}, order: [['updated_at', 'DESC']]}, {model: User}]
    });

    if(!postData) {
      res.status(404).json({message: "No post found with this id"});
    } else{
      const post = postData.get({plain: true});

      res.render("post", {
        post,
        loggedIn: req.session.loggedIn
      });
    }

  } catch (error) {
    res.status(500).json(error);
  }
});

// "/users/:id" get route
router.get("/users/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{model: Post, order: [['updated_at', 'DESC']]}, {model: Comment, include: {model: Post}, order: [['updated_at', 'DESC']]}]
    });
    if(!userData) {
      res.status(404).json({message: "No user found with this id"});
    } else{
      const user = userData.get({plain: true});

      res.render("user", {
        user,
        loggedIn: req.session.loggedIn
      });
    }

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
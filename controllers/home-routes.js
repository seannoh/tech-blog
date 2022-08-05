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

    // req.session.save((err) => {
    //   req.session.loggedIn = true;

    // });
    // console.log(req.session.loggedIn);

    res.render("./home/homepage", {
      posts, 
      loggedIn: req.session.loggedIn
    });
    
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/login" get route
router.get("/login", (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("./home/login");
  }
})

// "/posts/:id" get route
router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: Comment, include: {model: User}, separate: true, order: [['updated_at', 'DESC']]}, {model: User}]
    });

    if(!postData) {
      res.status(404).json({message: "No post found with this id"});
    } else{
      const post = postData.get({plain: true});

      res.render("./home/post", {
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
      include: [{
        model: Post, 
        separate: true, 
        order: [['updated_at', 'DESC']], 
        include: [{
          model: Comment, 
          include: {model: User}, 
          separate: true, 
          order: [['updated_at', 'DESC']]
          },
          {
            model: User
          }
        ]
      }]
    });
    if(!userData) {
      res.status(404).json({message: "No user found with this id"});
    } else{
      const user = userData.get({plain: true});

      res.render("./home/user", {
        user,
        loggedIn: req.session.loggedIn
      });
    }

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
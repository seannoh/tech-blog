const express = require("express");
const router = express.Router();
const {User, Post, Comment} = require("../../models");

// "/" get all users route
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(err);
  }
});

// "/:id" get one user route
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{model: Post}, {model: Comment, include: {model: Post}}]
    });
    if(!userData) {
      res.status(404).json({message: "No user found with this id"});
    } else{
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

// "/" post route: create new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.regenerate((err) => {
      if(err) throw err;

      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      req.session.save((err) => {
        if(err) throw err;
        res.status(200).json(userData);
      })
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

// "/:id" put route: update username/password
router.put("/:id", (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!userData) {
      res.status(404).json({message: "No user found with this id"});
    }else {
      res.status(200).json(userData);
    }
    
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" delete route: delete a user
router.delete("/:id", (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!userData) {
      res.status(404).json({message: "No user found with this id"});
    }else {
      res.status(200).json(userData);
    }
    
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/login" post route
router.post("/login", (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if(!userData) {
      res.status(404).json({message: "No user found with this email address"});
    } else{
      const isValidPassword = userData.checkPassword(req.body.password);
      if(!isValidPassword) {
        res.status(404).json({message: "Incorrect password"});
      } else {
        
        req.session.regenerate((err) => {
          if(err) throw err;
    
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.loggedIn = true;
    
          req.session.save((err) => {
            if(err) throw err;
            res.status(200).json({userData, message: "Successfully logged in!"});
          });
        });
      }
    }


  } catch (error) {
    res.status(500).json(error);
  }
});

// "/logout" post route
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
        res.status(200).end();
    });
  }
  else {
    res.status(404).end();
  }
})


module.exports = router;
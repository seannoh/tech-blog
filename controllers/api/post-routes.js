const express = require("express");
const router = express.Router();
const {User, Post, Comment} = require("../../models");
const withAuth = require("../../utils/auth");

// "/" get all posts route
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: Comment, include: {model: User}}, {model: User}]
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" get one post route
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: Comment, include: {model: User}}, {model: User}]
    });
    if(!postData) {
      res.status(404).json({message: "No post found with this id"});
    } else{
      res.status(200).json(postData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/" post route: create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" put route: update a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!postData) {
      res.status(404).json({message: "No post found with this id"});
    } else{
      res.status(200).json(postData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" delete route: delete a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!postData) {
      res.status(404).json({message: "No post found with this id"});
    } else{
      res.status(200).json(postData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
const express = require("express");
const router = express.Router();
const {User, Post, Comment} = require("../../models");
const withAuth = require("../../utils/auth");

// "/" get all comments route
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" get one comment route
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    if(!commentData) {
      res.status(404).json({message: "No comment found with this id"});
    } else{
      res.status(200).json(commentData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/" post route: create new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// "/:id" delete route: delete a comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!commentData) {
      res.status(404).json({message: "No comment found with this id"});
    } else{
      res.status(200).json(commentData);
    }  
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
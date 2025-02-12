const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

const postsController = require("../controller/postController");

// index
router.get("/", postsController.index);

// show

router.get("/:id", postsController.show);

// router.get(`/:slug`, (req, res));

// store
router.post("/", postsController.store);

// update

router.post("/:id", postsController.update);

// modify

router.post("/:id", postsController.modify);

// destroy

router.post("/:id", postsController.destroy);

module.exports = router;

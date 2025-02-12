const express = require("express");
const router = express.Router();

const postsController = require("../controller/postController");

// index GET
router.get("/", postsController.index);

// show GET

router.get("/:id", postsController.show);

// router.get(`/:slug`, (req, res));

// store POST
router.post("/", postsController.store);

// update PUT

router.post("/:id", postsController.update);

// modify PATCH

router.post("/:id", postsController.modify);

// destroy DELATE

router.post("/:id", postsController.destroy);

module.exports = router;

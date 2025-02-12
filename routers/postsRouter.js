const express = require("express");
const router = express.Router();

const {index, show, store, update, modify, destroy} = require("../controller/postController");

// index GET
router.get("/", index);

// show GET

router.get("/:id", show);

// router.get(`/:slug`, (req, res));

// store POST
router.post("/", store);

// update PUT

router.put("/:id", update);

// modify PATCH

router.patch("/:id", modify);

// destroy DELATE

router.delete("/:id", destroy);

module.exports = router;

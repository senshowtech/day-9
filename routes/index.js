const express = require("express");
const router = express.Router();
const {
  blogData,
  blogPost,
  blogCreateproject,
} = require("../controller/blog.js");

router.get("/", blogData);
router.post("/post-data", blogPost);
router.get("/add-project", blogCreateproject);

module.exports = router;

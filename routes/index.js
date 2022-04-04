const express = require("express");
const router = express.Router();
const {
  blogData,
  blogPost,
  blogCreateproject,
  blogDetail,
  blogDelete,
  blogDetailedit,
  blogContact,
  blogEdit,
} = require("../controller/blog.js");

router.get("/", blogData);
router.get("/contact", blogContact);
router.post("/post-data", blogPost);
router.post("/edit-project", blogEdit);
router.get("/add-project", blogCreateproject);
router.get("/detail-project/:id", blogDetail);
router.get("/edit-project/:id", blogDetailedit);
router.get("/delete-project/:id", blogDelete);

module.exports = router;

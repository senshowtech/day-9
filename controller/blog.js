const { getDate, dateMonth } = require("./waktu.js");
const { checkboxLogic, checkboxCreate } = require("./checkbox.js");
const db = require("../config/db.js");

exports.blogData = (req, res) => {
  db.query("SELECT * FROM tb_blog", (error, results) => {
    if (error) {
      throw error;
    }
    let blogs = results.rows.map((value, index) => {
      return {
        ...value,
        date: getDate(value.start_date, value.end_date),
      };
    });
    res.render("index", { list: blogs });
  });
};

exports.blogCreateproject = (req, res) => {
  res.render("create-project");
};

exports.blogPost = (req, res) => {
  let nodejs = req.body.nodejs;
  let vuejs = req.body.vuejs;
  let react = req.body.reactjs;
  let python = req.body.python;
  db.query(
    "INSERT INTO tb_blog (description, technologies, name, start_date, end_date) VALUES ($1, $2, $3, $4, $5)",
    [
      req.body.inputdescription,
      checkboxCreate(nodejs, vuejs, react, python),
      req.body.inputproject,
      req.body.inputstartdate,
      req.body.inputenddate,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/");
    }
  );
};

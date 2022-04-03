const {
  getDate,
  dateMonth,
  startdateEdit,
  enddateEdit,
} = require("./waktu.js");
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

exports.blogDetail = (req, res) => {
  let index = req.params.id;
  db.query(`SELECT * FROM tb_blog WHERE id = $1`, [index], (error, results) => {
    if (error) {
      throw error;
    }
    let data = results.rows[0];
    let icon = data.technologies;
    let data_object = {
      id: data.id,
      project: data.name,
      description: data.description,
      start_date: data.start_date,
      end_date: data.end_date,
      date: getDate(data.start_date, data.end_date),
      date_moth: dateMonth(data.start_date, data.end_date),
    };
    res.render("detail", data_object);
  });
};

exports.blogDelete = (req, res) => {
  let index = req.params.id;
  db.query(`DELETE FROM tb_blog WHERE id = $1`, [index], (error, results) => {
    if (error) {
      throw error;
    }
    res.redirect("/");
  });
};

exports.blogDetailedit = (req, res) => {
  let index = req.params.id;
  db.query(`SELECT * FROM tb_blog WHERE id = $1`, [index], (error, results) => {
    if (error) {
      throw error;
    }
    let data = results.rows[0];
    let icon = data.technologies;
    let data_object = {
      id: data.id,
      project: data.name,
      description: data.description,
      start_date: startdateEdit(data.start_date),
      end_date: enddateEdit(data.end_date),
      date: getDate(data.start_date, data.end_date),
      date_moth: dateMonth(data.start_date, data.end_date),
    };
    res.render("edit-project", data_object);
  });
};

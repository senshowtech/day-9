const {
  getDate,
  dateMonth,
  startdateEdit,
  enddateEdit,
} = require("./waktu.js");

const {
  checkboxLogic,
  checkboxDetail,
  checkboxCreate,
  checkboxDetailArray,
} = require("./checkbox.js");

const db = require("../config/db.js");

let isLogin = true;

exports.blogContact = (req, res) => {
  return res.render("contact");
};

exports.blogData = (req, res) => {
  db.query("SELECT * FROM tb_projects", (error, results) => {
    if (error) {
      throw error;
    }
    let blogs = results.rows.map((value, index) => {
      return {
        ...value,
        date: getDate(value.start_date, value.end_date),
        isLogin: isLogin,
      };
    });
    res.render("index", { isLogin, list: blogs });
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
    "INSERT INTO tb_projects (description, technologies, name, start_date, end_date) VALUES ($1, $2, $3, $4, $5)",
    [
      req.body.inputdescription,
      // buat array untuk di masukkan ke db
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
  db.query(
    `SELECT * FROM tb_projects WHERE id = $1`,
    [index],
    (error, results) => {
      if (error) {
        throw error;
      }
      let data = results.rows[0];
      let icon = data.technologies;
      // let array = checkboxDetailArray(icon)
      let nodejs = checkboxDetailArray(icon)[0];
      let vuejs = checkboxDetailArray(icon)[1];
      let python = checkboxDetailArray(icon)[2];
      let reactjs = checkboxDetailArray(icon)[3];
      let data_object = {
        id: data.id,
        project: data.name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        date: getDate(data.start_date, data.end_date),
        date_moth: dateMonth(data.start_date, data.end_date),
        nodejs: nodejs,
        vuejs: vuejs,
        python: python,
        reactjs: reactjs,
        // ubah template jika bersebrangan
        icon: checkboxDetail(nodejs, vuejs, python, reactjs),
      };
      res.render("detail", data_object);
    }
  );
};

exports.blogDetailedit = (req, res) => {
  let index = req.params.id;
  db.query(
    `SELECT * FROM tb_projects WHERE id = $1`,
    [index],
    (error, results) => {
      if (error) {
        throw error;
      }
      let data = results.rows[0];
      let icon = data.technologies;
      let nodejs = checkboxDetailArray(icon)[0];
      let vuejs = checkboxDetailArray(icon)[1];
      let python = checkboxDetailArray(icon)[2];
      let reactjs = checkboxDetailArray(icon)[3];
      // untuk ubah nilai yang di checklist dan tidak
      checkboxLogic(nodejs, vuejs, python, reactjs);
      let data_object = {
        id: data.id,
        project: data.name,
        description: data.description,
        start_date: startdateEdit(data.start_date),
        end_date: enddateEdit(data.end_date),
        date: getDate(data.start_date, data.end_date),
        date_moth: dateMonth(data.start_date, data.end_date),
        nodejs_html: nodejs,
        vuejs_html: vuejs,
        python_html: python,
        reactjs_html: reactjs,
        index: index,
      };
      res.render("edit-project", data_object);
    }
  );
};

exports.blogEdit = (req, res) => {
  let nodejs = req.body.nodejs;
  let vuejs = req.body.vuejs;
  let react = req.body.reactjs;
  let python = req.body.python;
  db.query(
    "UPDATE tb_projects SET description = $1, technologies = $2, name = $3, start_date = $4, end_date = $5 WHERE Id = $6",
    [
      req.body.inputdescription,
      // buat array untuk di masukkan ke db
      checkboxCreate(nodejs, vuejs, react, python),
      req.body.inputproject,
      req.body.inputstartdate,
      req.body.inputenddate,
      req.body.id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/");
    }
  );
};

exports.blogDelete = (req, res) => {
  let index = req.params.id;
  db.query(
    `DELETE FROM tb_projects WHERE id = $1`,
    [index],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/");
    }
  );
};

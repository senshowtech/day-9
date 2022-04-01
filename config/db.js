const { Pool } = require("pg");

const dbPool = new Pool({
  database: "day9",
  port: 5432,
  user: "sena",
  password: "febrisena123",
});

module.exports = dbPool;

const { Pool } = require("pg");

let connectionString = `postgres://hnnfkiktpzylib:9e8ce87c2415d15017121c4ec485c9fbd1d5091d85609a524b88113854cec8bd@ec2-52-73-155-171.compute-1.amazonaws.com:5432/d807kji38sj9ba`;

const dbPool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
  // database: "day9",
  // port: 5432,
  // user: "sena",
  // password: "febrisena123",
});

module.exports = dbPool;

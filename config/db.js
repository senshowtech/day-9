const { Pool } = require("pg");

let connectionString = `postgres://ajlesvamqpnmik:d3f58a5def0aedea447824d3d99e1dc82ddc4d080fe29f53e52824589f99f8a7@ec2-52-3-200-138.compute-1.amazonaws.com:5432/dcq7han20fr25e`;

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

const { Pool } = require("pg");

let connectionString = `postgres://svugkbjyggpdpe:6a09f9acae4e3f2ae2ae27780ba186458b902e564d41044d8cb688cf04e5e9b0@ec2-54-173-77-184.compute-1.amazonaws.com:5432/dea5nj9us5cpib`;

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
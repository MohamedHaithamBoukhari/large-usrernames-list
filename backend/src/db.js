const { Pool } = require("pg");
require("dotenv").config();

// Connect to the PostgreSQL database
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

//Check if the connection is successful
pool
  .query("SELECT NOW()")
  .then((res) => {
    console.log("Database connection successful", res.rows[0]);
  })
  .catch((err) => {
    console.error("Database connection error", err.stack);
  });
  
module.exports = pool;
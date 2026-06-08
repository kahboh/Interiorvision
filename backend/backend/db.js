const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "interiorvision-bd",
  database: "interiorvision",
  password: "admin123",
  port: 5432,
});

module.exports = pool;
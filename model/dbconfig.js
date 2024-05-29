import pg from "pg";
const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: 5432,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const pool = new Pool(config);

export default pool;

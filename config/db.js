import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "productsdb",
});

export { pool };

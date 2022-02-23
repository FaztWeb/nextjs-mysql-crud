import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "productsdb",
  },
});

export { pool };

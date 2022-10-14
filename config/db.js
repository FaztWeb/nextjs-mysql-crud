import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 8889,
    database: "productsdb",
  },
});

export { pool };

import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [
        req.query.id,
      ]);
      return res.status(200).json(result[0]);
    default:
      return res.status(400).json({ msg: "bad request" });
  }
}

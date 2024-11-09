
import pool from '../db.js';


const insertFeedback = async (feedback) => {
  const { name, email, phone_number, category, query } = feedback;
  const result = await pool.query(
    `INSERT INTO feedback (name, email, phone_number, category, query)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, email, phone_number, category, query]
  );
  return result.rows[0];
};

const getFeedbacks = async () => {
  const result = await pool.query('SELECT * FROM feedback ORDER BY submitted_at DESC');
  return result.rows;
};

export { insertFeedback, getFeedbacks };

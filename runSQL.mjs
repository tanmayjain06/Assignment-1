
import 'dotenv/config';
import fs from 'fs';
import pool from './db.js'; 


const sql = fs.readFileSync('./schema.sql', 'utf8');


pool.query(sql)
  .then(() => {
    console.log('SQL script executed successfully');
  })
  .catch((err) => {
    console.error('Error executing SQL script', err);
  })
  .finally(() => {
    pool.end(); 
  });


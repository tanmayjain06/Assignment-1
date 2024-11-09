import 'dotenv/config'; 
import express from 'express';
import feedbackRoutes from './routes/feedbackRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

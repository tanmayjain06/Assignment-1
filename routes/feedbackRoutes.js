import express from 'express';
import { submitFeedback, getAllFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/feedbacks', getAllFeedbacks);

export default router;

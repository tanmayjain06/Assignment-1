
import { insertFeedback, getFeedbacks } from '../model/model.feedback.js';
import { validateFeedback } from '../validators/feedback.validators.js';

export const submitFeedback = async (req, res) => {
  const validation = validateFeedback(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error?.errors?.map(err => err.message) || ["Invalid data"] });

  }

  try {
    const feedback = await insertFeedback(validation.data);
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await getFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
};

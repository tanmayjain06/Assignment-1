import { z } from 'zod';

const feedbackSchema = z.object({
  name: z.string().min(1, "Name is required").regex(/^[a-zA-Z\s]+$/, "Name should contain only letters and spaces"),
  email: z.string().email("Invalid email address"),
  phone_number: z
    .string()
    .regex(/^\d+$/, "Phone number should contain only digits")
    .refine((num) => num.length === 10, { message: "Phone number should be 10 digits" })
    .optional(),
  category: z.enum(["General Inquiry", "Support", "Feedback", "Other"], "Invalid category"),
  query: z.string().min(1, "Query cannot be empty"),
});

export const validateFeedback = (data) => {
  return feedbackSchema.safeParse(data);
};

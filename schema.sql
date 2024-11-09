CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    category VARCHAR(50) CHECK (category IN ('General Inquiry', 'Support', 'Feedback', 'Other')),
    query TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP

);

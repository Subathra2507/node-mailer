const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json()); 


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'subi2507bala@gmail.com', //  Gmail address
    pass: 'xghm zvaw davq vbbu', //  Gmail App Password
  },
});

// Endpoint to send email
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  // Basic check
  if (!to || !subject || !text) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const info = await transporter.sendMail({
      from: 'subi2507bala@gmail.com',
      to,
      subject,
      text,
    });

    res.json({ message: 'Email sent!', info });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Failed to send email.', error: err.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send('Name and Email are required.');
  }

  try {
    // Email to staff
    const mailOptionsStaff = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Discovery Call Request',
      text: `Name: ${name}\nEmail: ${email}`,
    };

    // Send email to staff
    transporter.sendMail(mailOptionsStaff, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email to staff.');
      }
      console.log('Message sent to staff: %s', info.messageId);
    });

    // Email to user
    const mailOptionsUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Discovery Call Request Confirmation',
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your request for a discovery call. Our team will get back to you shortly.\n\nBest Regards,\nGreat Marketing Team`,
    };

    // Send confirmation email to user
    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending confirmation email to user.');
      }
      console.log('Confirmation message sent to user: %s', info.messageId);
    });

    res.status(200).send('Emails sent successfully.');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

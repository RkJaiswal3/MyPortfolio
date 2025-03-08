require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app-specific password
  },
});

// API Endpoint for contact form
app.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Must match the authenticated email
    to: process.env.EMAIL_USER, // Your email
    subject: `Message from ${name}`,
    text: `You have a new message received from.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email, // Allows you to reply directly to the sender's email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Failed to send message.");
    }
    res.status(200).send("Message sent successfully!");
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



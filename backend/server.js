const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rohitrkj929@gmail.com", // Your email
    pass: "eaaz oojk tpfm kfga", // Your email password or app-specific password
  },
});

// API Endpoint for contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "rohitrkj929@gmail.com", // Your email
    subject: `Message from ${name}`,
    text: message,
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
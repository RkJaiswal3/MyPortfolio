import { useState } from "react";
import axios from "axios";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(" ");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userName = formData.name; // Store before resetting

      const response = await axios.post(
        "https://myportfolio-backend-v79c.onrender.com",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({ name: "", email: "", message: "" });
        alert(`Thank You ${userName}. Your message was sent successfully!`);
      } else if (response.status === 204) {
        alert(
          `Thank You ${userName}. Your message was received, but there's no response content.`
        );
      } else {
        setStatus("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      {/* {status && <p className="text-center mt-3">{status}</p>} */}
    </section>
  );
}

export default ContactMe;

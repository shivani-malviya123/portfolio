import React, { useState } from "react";
import "./Contact.css"; // Ensure CSS file is included

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name} (${formData.email}): ${formData.message}`);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
     <br />
      {/* <div className="contact-info"> */}
        <p><strong>Email:<a href="mailto:tumharaemail@example.com">shivanim.bca2023@ssism.org</a></strong> </p>
        <p><strong>LinkedIn: <a href="https://linkedin.com/in/contact-shivani-malviya" target="_blank">View Profile</a></strong> </p>
      {/* </div> */} </form>
    </section>
  );
}

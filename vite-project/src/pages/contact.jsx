import React, { useState } from 'react';


import '../styles/contact.css'; // Import your CSS file

function ContactPage()  {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send form data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xqkrkggg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };













  return (
    <div className="contact-container">
      <div className="left-section">
        <h2>Contact Carve Architects</h2>

      </div>
      <div className="right-section">
        <form id="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xqkrkggg" method="post">
        {!isFormSubmitted ? (
<>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="8" required></textarea>

          <button type="submit">Submit</button>
          </>
        ):(
          <p>Thank you for contacting us! We will get back to you soon.
          </p>
        )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useState } from 'react';
import contact from '../assets/contact.jpg';
import '../styles/contact.css';

function Contact() {
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
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: url(${contact}) }}></div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>
        <form id="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xqkrkggg" method="post">
          {!isFormSubmitted ? (
            <>
              <label htmlFor='name'>Full Name</label>
              <input name="name" placeholder='Enter Full name.....' type="text" />
              <label htmlFor='email'>Email</label>
              <input name="email" placeholder='Enter email.....' type="email" />
              <label htmlFor='message'>Message</label>
              <textarea rows="6" placeholder='Enter message....' name="message" required></textarea>
              <button type="submit">Send Message</button>
            </>
          ) : (
            <p>Thank you for contacting us! We will get back to you soon.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
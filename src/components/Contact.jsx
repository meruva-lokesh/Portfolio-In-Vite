// Contact.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background: var(--bg-dark);
  padding: 4rem 0 3rem 0;
`;
const Form = styled.form`
  background: linear-gradient(120deg, #232946 60%, #181e2e 100%);
  max-width: 480px;
  margin: 0 auto;
  border-radius: 16px;
  padding: 2.2rem 2rem 2rem 2rem;
  box-shadow: 0 4px 24px #6c63ff11, 0 2px 12px #23294622;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const Input = styled.input`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: none;
  background: #232946;
  color: var(--text-main);
  font-size: 1.08rem;
  box-shadow: 0 2px 8px #6c63ff11;
`;
const TextArea = styled.textarea`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: none;
  background: #232946;
  color: var(--text-main);
  font-size: 1.08rem;
  min-height: 110px;
  box-shadow: 0 2px 8px #6c63ff11;
`;
const Button = styled.button`
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.85rem 2.2rem;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.18s;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 16px #6c63ff13;
  &:hover {
    background: linear-gradient(90deg, var(--accent2), var(--accent));
    transform: translateY(-2px) scale(1.04);
  }
`;
const Confirmation = styled.div`
  color: var(--accent2);
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1.2rem;
`;
const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <ContactSection id="contact" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="text" name="subject" placeholder="Subject" required />
          <TextArea name="message" placeholder="Message" required />
          <Button type="submit">Send Message</Button>
          {sent && <Confirmation>Thanks for reaching out!</Confirmation>}
        </Form>
      </div>
    </ContactSection>
  );
};

export default Contact;

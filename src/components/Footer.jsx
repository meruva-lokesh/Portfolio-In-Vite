// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: var(--bg-light);
  color: var(--text-secondary);
  padding: 2rem 0 1.2rem 0;
  text-align: center;
  font-size: 1rem;
`;
const Socials = styled.div`
  margin-bottom: 0.7rem;
  a {
    color: var(--accent);
    margin: 0 0.7rem;
    font-size: 1.5rem;
    transition: color 0.2s;
    &:hover {
      color: var(--accent2);
    }
  }
`;
const Footer = () => (
  <FooterSection>
    <Socials>
      <a href="https://www.linkedin.com/in/lokesh-meruva-1a16b628a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/meruva-lokesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
    </Socials>
    <div>Thanks for visiting!</div>
    <div>© 2025 Meruva Lokesh. All rights reserved.</div>
  </FooterSection>
);

export default Footer;

// About.jsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: var(--bg-light);
  padding: 4rem 0 3rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const Bio = styled.div`
  flex: 2;
  min-width: 260px;
`;
const InfoPanel = styled.ul`
  flex: 1;
  min-width: 220px;
  background: linear-gradient(120deg, #232946 60%, #181e2e 100%);
  border-radius: 14px;
  padding: 1.5rem 1.2rem;
  list-style: none;
  color: var(--text-main);
  box-shadow: 0 2px 12px #6c63ff11, 0 2px 12px #23294622;
  font-size: 1.05rem;
`;
const InfoItem = styled.li`
  margin-bottom: 0.7rem;
  strong {
    color: var(--accent2);
    font-weight: 700;
    margin-right: 0.5rem;
    letter-spacing: 0.5px;
  }
`;
const About = () => (
  <AboutSection id="about" data-aos="fade-up">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <Container>
        <Bio>
          <p>
            I'm currently pursuing my final year B.Tech in Computer Science & Engineering at KL University.<br />
            I specialize in Java, SQL, Git, and GitHub, and I’m passionate about continuous learning and adapting to new tech.<br />
            I believe in writing clean, efficient code and delivering high-quality results. Let’s build something amazing together!
          </p>
        </Bio>
        <InfoPanel>
          <InfoItem><strong>Name:</strong> Meruva Lokesh</InfoItem>
          <InfoItem><strong>Age:</strong> 20</InfoItem>
          <InfoItem><strong>From:</strong> India</InfoItem>
          <InfoItem><strong>Email:</strong> lokeshmeruva10@gmail.com</InfoItem>
          <InfoItem><strong>Availability:</strong> Full-time</InfoItem>
          <InfoItem><strong>Experience:</strong> &lt; 1 year</InfoItem>
        </InfoPanel>
      </Container>
    </div>
  </AboutSection>
);

export default About;

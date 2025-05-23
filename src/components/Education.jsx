// Education.jsx
import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  background: var(--bg-dark);
  padding: 4rem 0 3rem 0;
`;
const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;
`;
const Card = styled.div`
  background: linear-gradient(120deg, #232946 60%, #181e2e 100%);
  border-left: 5px solid var(--accent2);
  border-radius: 14px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 16px #6c63ff11, 0 2px 12px #23294622;
  color: var(--text-main);
  position: relative;
  margin-bottom: 0.5rem;
`;
const Degree = styled.h3`
  margin: 0 0 0.3rem 0;
  font-size: 1.15rem;
  color: var(--accent);
  font-weight: 700;
`;
const School = styled.div`
  font-weight: 600;
  color: var(--accent2);
`;
const Year = styled.div`
  color: var(--text-secondary);
  font-size: 1.02rem;
  margin-bottom: 0.2rem;
`;
const Score = styled.div`
  color: var(--accent);
  font-size: 1.02rem;
`;
const Education = () => (
  <EducationSection id="education" data-aos="fade-up">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <Timeline>
        <Card>
          <Degree>B.Tech CSE</Degree>
          <School>KL University</School>
          <Year>2022–2026</Year>
          <Score>CGPA: 8.62</Score>
        </Card>
        <Card>
          <Degree>HSC</Degree>
          <School>Narayana Junior College</School>
          <Year>2020–2022</Year>
          <Score>Score: 93%</Score>
        </Card>
        <Card>
          <Degree>10th Grade</Degree>
          <School>Roshini Ratnam EM HS</School>
          <Year>2019–2020</Year>
          <Score>Score: 91%</Score>
        </Card>
      </Timeline>
    </div>
  </EducationSection>
);

export default Education;

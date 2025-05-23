// Projects.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background: var(--bg-light);
  padding: 4rem 0 3rem 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;
const Card = styled.div`
  background: linear-gradient(120deg, #181e2e 60%, #232946 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px #6c63ff11, 0 2px 12px #23294622;
  padding: 2.2rem 1.7rem 1.7rem 1.7rem;
  color: var(--text-main);
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
  border-top: 4px solid var(--accent2);
  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 12px 48px #a259f744, 0 2px 12px #23294644;
    border-top: 4px solid var(--accent);
  }
`;
const Title = styled.h3`
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
const Desc = styled.p`
  color: var(--text-secondary);
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: var(--accent2);
  }
`;
const Projects = () => (
  <ProjectsSection id="projects" data-aos="fade-up">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="section-subtitle">Discover my projects, where creativity meets innovation</div>
      <Grid>
        <Card>
          <Title>Vehicle Image Classification</Title>
          <Desc>Deep learning-based web app using ResNet50 to classify vehicle types in real-time with confidence scores.</Desc>
          <Button href="https://github.com/meruva-lokesh/Vehicle-Image-Classification" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </Button>
        </Card>
        <Card>
          <Title>AI Resume Analyzer</Title>
          <Desc>Analyzes resumes by comparing them to job descriptions using BERT embeddings; returns a match score (0–100%).</Desc>
          <Button href="https://github.com/meruva-lokesh/AI_Resume_Analyzer" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </Button>
        </Card>
        <Card>
          <Title>Handwritten Digit Recognition</Title>
          <Desc>Flask + TensorFlow app to recognize digits (0–9) from uploaded images. Web-based UI, high accuracy predictions.</Desc>
          <Button href="https://github.com/meruva-lokesh/Handwritten-Digit-Recognition" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </Button>
        </Card>
      </Grid>
    </div>
  </ProjectsSection>
);

export default Projects;

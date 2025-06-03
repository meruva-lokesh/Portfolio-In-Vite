// Hero.jsx
import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(120deg, #232946 0%, #1a2236 100%);
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 0 2rem 0;
  }
`;
const AnimatedBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle at 30% 30%, #6c63ff33 0%, transparent 70%),
                radial-gradient(circle at 70% 70%, #a259f733 0%, transparent 70%);
    filter: blur(60px);
    z-index: 1;
    animation: bgmove 12s linear infinite alternate;
  }
  @keyframes bgmove {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(8deg); }
  }
`;
const ProfileImg = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--accent2);
  margin-right: 3.5rem;
  box-shadow: 0 8px 40px 0 #6c63ff33, 0 2px 12px #23294644;
  background: #181e2e;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-2deg);
    box-shadow: 0 12px 48px 0 #a259f744, 0 2px 12px #23294644;
  }
  @media (max-width: 900px) {
    margin: 0 0 2rem 0;
    width: 180px;
    height: 180px;
  }
`;
const HeroText = styled.div`
  max-width: 540px;
  color: var(--text-main);
  z-index: 2;
  background: rgba(26,34,54,0.85);
  border-radius: 18px;
  padding: 2.2rem 2.2rem 2rem 2.2rem;
  box-shadow: 0 2px 24px #23294622;
  @media (max-width: 900px) {
    padding: 1.2rem 0.7rem;
    background: rgba(26,34,54,0.95);
  }
`;
const Name = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--accent);
  letter-spacing: 1px;
  text-shadow: 0 2px 16px #6c63ff22;
`;
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: var(--accent2);
  letter-spacing: 0.5px;
  min-height: 2.2rem;
`;
const Desc = styled.p`
  font-size: 1.18rem;
  margin-bottom: 2.2rem;
  color: var(--text-main);
  line-height: 1.7;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;
const Button = styled.a`
  text-decoration: none;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  color: #fff;
  border-radius: 8px;
  padding: 0.85rem 2.2rem;
  font-size: 1.08rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(108,99,255,0.13);
  transition: background 0.2s, transform 0.18s;
  letter-spacing: 0.5px;
  border: none;
  outline: none;
  &:hover {
    background: linear-gradient(90deg, var(--accent2), var(--accent));
    transform: translateY(-2px) scale(1.04);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home" data-aos="fade-up">
      <AnimatedBg />
      <ProfileImg src="/photo.jpeg" alt="Meruva Lokesh profile" />
      <HeroText>
        <Name>Hi, I'm Meruva Lokesh <span role="img" aria-label="wave">👋</span></Name>
        <Subtitle>
          <Typewriter
            words={["Aspiring Software Engineer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </Subtitle>
        <Desc>
          Passionate about building innovative tech and solving real-world problems through code.
        </Desc>
        <ButtonRow>
          <Button href="MERUVA LOKESH.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Button>
          <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="button" style={{cursor:'pointer', fontWeight:700, borderRadius:'8px', background:'linear-gradient(90deg, var(--accent2), var(--accent))', color:'#fff', padding:'0.85rem 2.2rem', textDecoration:'none', transition:'background 0.2s, transform 0.18s'}} activeStyle={{background:'linear-gradient(90deg, var(--accent), var(--accent2))'}}>Contact Me</ScrollLink>
        </ButtonRow>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;

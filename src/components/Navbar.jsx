// Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Nav = styled.nav`
  width: 100vw;
  left: 0;
  background: rgba(16, 22, 36, 0.95);
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(108,99,255,0.04);
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.7rem 2rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 700px) {
    padding: 0.7rem 0.7rem;
  }
`;
const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 1px;
`;
const Links = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 600px) {
    gap: 0.7rem;
  }
`;
const NavLink = styled(ScrollLink)`
  color: var(--text-main);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: var(--accent2);
  }
`;
const Navbar = () => (
  <Nav>
    <Container>
      <Logo>Lokesh</Logo>
      <Links>
        <NavLink to="home" smooth={true} duration={600} offset={-60}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={600} offset={-60}>About</NavLink>
        <NavLink to="education" smooth={true} duration={600} offset={-60}>Education</NavLink>
        <NavLink to="projects" smooth={true} duration={600} offset={-60}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={600} offset={-60}>Contact</NavLink>
      </Links>
    </Container>
  </Nav>
);

export default Navbar;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from './HeaderStyles';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 300px;
  height: 100%;
  background: #0F1624;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  z-index: 999;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#tech">Technologies</NavLink>
      <NavLink href="#about">About</NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;

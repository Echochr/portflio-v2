import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';
import { MdMenu, MdClose, MdMailOutline } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import SCREENS from '../../constants/screens';

const Container = styled.nav`
  ${tw`
    flex
    justify-between
    items-center
    h-36
    p-6
    lg:px-32
    lg:py-12
  `}
`;

const Logo = styled.div`
  ${tw`
    text-4xl
    text-white
    font-bold
    flex
    items-end
  `}

  div {
    ${tw`
      rounded-full
      bg-yellow-400
      w-2
      h-2
      ml-0.5
    `}
  }
`;

const BurgerMenuIcon = styled.div`
  ${tw`
    text-4xl
    text-white
  `}
`

const NavLinks = styled.div`
  height: 100%;
  maxHeight: 100%;
  ${tw`
    flex
    justify-between
    items-center
  `}
`;

const LinkItemsContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-between
    min-h-[180px]
    md:min-h-0
    md:min-w-[400px]
    md:flex-row
  `}
`;

const LinkItem = styled.a`
  ${tw`
    text-xl
    text-white
    uppercase
    cursor-pointer
    hover:text-yellow-400

    transition
    duration-200
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-5
  `}
`;

const SocialMediaContainer = styled.div`
  min-width: 100px;
  ${tw`
    flex
    justify-between
  `}
`

const SocialMediaItem = styled.a`
  ${tw`
    text-2xl
    text-white
    cursor-pointer
    hover:text-yellow-400

    transition
    duration-200
  `}
`;

const SideMenu = styled.div`
  width: 65vw;
  height: 100vh;
  backdrop-filter: blur(12px);
  ${tw`
    absolute
    top-0
    right-0
    bg-white/20
    z-10

    p-6
    flex
    flex-col
  `}
`;

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  const [sideMenu, setSideMenu] = useState(false);
  const toggleSideMenu = () => setSideMenu(!sideMenu);


  if (isMobile) {
    return (
      <Container>
        <Logo>CH<div /></Logo>
        <BurgerMenuIcon>
          {!sideMenu && <MdMenu onClick={toggleSideMenu} />}
        </BurgerMenuIcon>
        {sideMenu && (
          <SideMenu>
            <div className="flex justify-end">
              <MdClose className="text-white text-4xl" onClick={toggleSideMenu} />
            </div>
            <LinkItemsContainer>
              <LinkItem href="#" onClick={toggleSideMenu}>Home</LinkItem>
              <LinkItem href="#projects" onClick={toggleSideMenu}>Projects</LinkItem>
              <LinkItem href="#skills" onClick={toggleSideMenu}>Skills</LinkItem>
              <LinkItem href="#" onClick={toggleSideMenu}>Contact</LinkItem>
            </LinkItemsContainer>
          </SideMenu>
        )}
      </Container>
    );
  }

  return (
    <Container>
      <Logo>CH<div /></Logo>
      <NavLinks>
        <LinkItemsContainer>
          <LinkItem href="#">Home</LinkItem>
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#skills">Skills</LinkItem>
          <LinkItem href="#">Contact</LinkItem>
        </LinkItemsContainer>
        <LineSeparator />
        <SocialMediaContainer>
          <SocialMediaItem><MdMailOutline /></SocialMediaItem>
          <SocialMediaItem href="https://linkedin.com/in/chris-hct" target="_blank"><FaLinkedin /></SocialMediaItem>
          <SocialMediaItem href="https://github.com/Echochr" target="_blank"><FaGithub /></SocialMediaItem>
        </SocialMediaContainer>
      </NavLinks>
    </Container>
  );
}

export default Navbar;
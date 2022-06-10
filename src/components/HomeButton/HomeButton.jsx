import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.a`
  width: 70px;
  height: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  ${tw`
    fixed
    bottom-4
    right-4
    rounded-full
    cursor-pointer

    shadow-md
    bg-white/20
    text-white
    text-3xl

    flex
    justify-center
    items-center
  `}
`;

function HomeButton() {
  return <Button href="#home"><FaArrowUp/></Button>;
}

export default HomeButton;

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  min-height: 50vh;
  ${tw`
    flex
    justify-center
    items-center
    p-6
    lg:px-32
    lg:pt-12
  `}
`;

const Greetings = styled.div`
  ${tw`
    text-center
    w-full
    xl:w-1/2
  `}
`;

const BoldText = styled.span`
  ${tw`
    text-white/70
    font-extrabold
    text-5xl
    tracking-widest
  `}
`;

const Name = styled.h1`
  ${tw`
    text-white
    text-7xl
    font-bold
  `}

  span {
    ${tw`
      text-yellow-500
    `}
  }

  div {
    ${tw`
      hidden
      md:inline-block
    `}
  }
`;

const Title = styled.h2`
  ${tw`
    text-white/70
    text-3xl
  `}
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 2rem;
  ${tw`
    mt-6
    text-white
    p-4
    transition
    duration-200

    hover:text-black
    hover:border-black
    hover:bg-yellow-500
  `}
`;

function Hero() {
  return (
    <Container>
      <Greetings>
        <BoldText>HELLO WORLD</BoldText>
        <Name>I'm <span>Chris</span> <div>👋</div></Name>
        <Title>Web Developer</Title>
        <a href="#contact"><Button>CONTACT ME</Button></a>
      </Greetings>
    </Container>
  );
}

export default Hero;

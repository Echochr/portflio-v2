import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Card = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  ${tw`
    p-4
    md:p-6
    rounded-lg
    bg-white/10
    shadow-lg
  `}
`;

const Image = styled.img`
  ${tw`
    rounded-md
  `}
`;

const Container = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    mt-2
  `}

  a {
    ${tw`
      py-0.5
      px-4
      text-white
      bg-white/20
      rounded-md
      cursor-pointer
      transition
      duration-200

      hover:text-black
      hover:bg-yellow-500
    `}
  }
`;

const Title = styled.h3`
  ${tw`
    text-white
    uppercase
    font-extrabold
    text-2xl
    mt-2
  `}
`;

const Description = styled.p`
  ${tw`
    text-white
    mt-2
  `}
`;

function ProjectCard({ title, description, img, appLink, sourceCode }) {
  return (
    <Card>
      <a href={appLink} target="_blank" rel="noreferrer">
        <Image src={img} />
      </a>
      <Container>
        <Title>{title}</Title>
        <a href={sourceCode} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </Container>
      <Description>{description}</Description>
    </Card>
  );
}

export default ProjectCard;

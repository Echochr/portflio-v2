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
    mt-4
  `}

  a {
    ${tw`
      py-0.5
      px-4
      text-white
      text-sm
      lg:text-base
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
    text-xl
    lg:text-2xl
  `}
`;

const Description = styled.p`
  ${tw`
    text-white
    text-sm
    lg:text-base
    mt-2
  `}
`;

const SkillsContainer = styled.div`
  ${tw`
    grid
    grid-cols-5
    justify-between
    gap-2.5
    mt-4
  `}
`;

const SkillItem = styled.span`
  ${tw`
    text-white
    text-xs
    bg-white/10
    py-0.5
    px-2.5
    rounded-full
    text-center
  `}
`;

function ProjectCard({ title, description, img, appLink, sourceCode, skills }) {
  return (
    <Card>
      <a href={appLink} target="_blank" rel="noreferrer">
        <Image src={img} alt={title}/>
      </a>
      <Container>
        <Title>{title}</Title>
        <a href={sourceCode} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </Container>
      <Description>{description}</Description>
      <SkillsContainer>
        {skills?.map((skill) => <SkillItem>{skill}</SkillItem>)}
      </SkillsContainer>
    </Card>
  );
}

export default ProjectCard;

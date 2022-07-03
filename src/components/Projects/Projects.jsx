import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import PROJECTS from '../../constants/projects';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  position: relative;
  background-color: #2a2a2a;
  min-height: 400px;
  width: 100%;
`;

const Container = styled.div`
  ${tw`
    p-6
    lg:px-32
    lg:py-12
  `}
`;

const Heading = styled.h2`
  ${tw`
    text-white
    text-2xl
    lg:text-3xl
    font-bold
    uppercase
    text-center
    mb-8
  `}
`;

const ProjectCardGrid = styled.div`
  ${tw`
    grid
    gap-4
    xl:gap-6
    xl:grid-cols-2
  `}
`;

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Heading>PROJECTS</Heading>
        <ProjectCardGrid>
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              img={project.img}
              appLink={project.appLink}
              sourceCode={project.sourceCode}
              skills={project.skills}
              key={idx}
            />
          ))}
        </ProjectCardGrid>
      </Container>
    </Section>
  );
}

export default Projects;

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SkillsSubsection from './SkillsSubsection';
import ExpSubsection from './ExpSubsection';

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

const InnerContainer = styled.div`
  ${tw`
    lg:flex
  `}
`;

const SkillsContainer = styled.div`
  ${tw`
    lg:w-3/5
  `}
`;

const ExpContainer = styled.div`
  ${tw`
    lg:w-2/5
  `}
`;

function SkillsExpSection() {
  return (
    <Section id="skills">
      <Container>
        <Heading>Skills & Experience</Heading>
        <InnerContainer>
          <SkillsContainer>
            <SkillsSubsection />
          </SkillsContainer>
          <ExpContainer>
            <ExpSubsection />
          </ExpContainer>
        </InnerContainer>
      </Container>
    </Section>
  );
}

export default SkillsExpSection;
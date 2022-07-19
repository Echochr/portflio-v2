import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import IMAGES from '../../constants/images';

const Container = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`;

const SkillLogo = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  ${tw`
    flex
    justify-center
    items-center
    rounded-full
    bg-white/10
    w-24
    h-24
    p-2
  `}

  img {
    max-width: 60px;
    height: auto;
  }
`;

const SkillName = styled.span`
  ${tw`
    text-white
    text-sm
    font-medium
    mt-1
  `}
`;

function SkillCard({ skill, title }) {
  return (
    <Container>
      <SkillLogo>
        <img src={IMAGES[skill]} alt={skill} />
      </SkillLogo>
      <SkillName>{title}</SkillName>
    </Container>
  );
}

export default SkillCard;

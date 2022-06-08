import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import EXPERIENCE from '../../constants/experience';

const SubHeading = styled.h4`
  ${tw`
    font-bold
    uppercase
  text-yellow-500
    text-xl
  `}
`;

const ExpItem = styled.div`
  ${tw`
    flex
    my-4
  `}
`;

const Year = styled.h5`
  ${tw`
    uppercase
    font-bold
    text-white
    w-2/5
  `}
`;

const Title = styled.div`
  ${tw`
  text-white
    font-bold
    w-3/5
  `}

  p {
    ${tw`
      text-xs
      font-normal
    `}
  }
`;

function ExpSubsection() {
  return (
    <>
      <SubHeading>Experience</SubHeading>
      {EXPERIENCE.map(({ year, title, company }, idx) => (
        <ExpItem key={idx}>
          <Year>{year}</Year>
          <Title>
            {title}
            <p>{company}</p>
          </Title>
        </ExpItem>
      ))}
    </>
  );
}

export default ExpSubsection;

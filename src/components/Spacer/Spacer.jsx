import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SPACER from '../../constants/spacer';

const StyledImg = styled.img`
  aspectRatio: 960/200;
  ${tw`
    w-screen
  `}
`;

function Spacer() {
  return (
    <>
      <StyledImg className="absolute opacity-50" src={SPACER.wave} alt="" />
      <StyledImg className="absolute opacity-50" src={SPACER.wave3} alt=""/>
      <StyledImg src={SPACER.wave2} alt="" />
    </>
  );
}

export default Spacer;

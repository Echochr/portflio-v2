import React from 'react';

import SPACER from '../../constants/spacer';

function Spacer() {
  return (
    <>
      <img className="absolute w-screen aspect-[960/300] opacity-10" src={SPACER.wave} alt="" />
      <img className="absolute w-screen aspect-[960/300]" src={SPACER.wave2} alt="" />
      <img className="absolute w-screen aspect-[960/300] opacity-10" src={SPACER.wave3} alt=""/>
    </>
  );
}

export default Spacer;

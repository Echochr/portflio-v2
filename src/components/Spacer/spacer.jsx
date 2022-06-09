import React from 'react';

import SPACER from '../../constants/spacer';

function Spacer() {
  return (
    <>
      <img className="absolute w-screen aspect-[960/200] opacity-50" src={SPACER.wave} alt="" />
      <img className="absolute w-screen aspect-[960/200] opacity-50" src={SPACER.wave3} alt=""/>
      <img className="w-screen aspect-[960/200]" src={SPACER.wave2} alt="" />
    </>
  );
}

export default Spacer;

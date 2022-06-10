import React from 'react';
import { motion } from 'framer-motion';

import pattern from '../../assets/pattern/background2.png';

function Pattern() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '100vw',
        top: '-75%',
        opacity: 0.75,
        zIndex: '-10',
      }}
      animate={{ rotate: 360 }}
      transition={{ ease: 'linear', duration: 150, repeat: Infinity }}
    >
      <img src={pattern} alt="" />
    </motion.div>
  );
}

export default Pattern;

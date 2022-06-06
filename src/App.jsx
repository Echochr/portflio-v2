import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Navbar from './components/Navbar';

const AppContainer = styled.div`
  ${tw`
    p-6
    lg:px-32
    lg:py-12
  `}
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;

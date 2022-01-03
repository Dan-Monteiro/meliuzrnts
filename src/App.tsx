
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import BottomNavigation from './Components/BottomNavigation';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <BottomNavigation />
    </>
  )
}

export default App;

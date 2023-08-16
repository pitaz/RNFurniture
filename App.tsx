/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Routes from './src/navigation';
import {useTheme} from 'react-native-paper';

function App(): JSX.Element {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  return <Routes />;
}

export default App;

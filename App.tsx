import 'react-native-gesture-handler';
import React from 'react';

/*import StackNavigator from './src/navigator/StackNavigator';
import MenuLateral from './src/navigator/MenuLaterial';*/

import {NavigationContainer} from '@react-navigation/native';
import MenuLateralPersonalizado from './src/navigator/MenuLaterialPersonalizado';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateralPersonalizado />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;

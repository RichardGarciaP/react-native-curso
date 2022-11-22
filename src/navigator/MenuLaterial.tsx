import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import ButtomTabsNavigator from './BottomTabs';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  const {width} = useWindowDimensions();
  console.log(width);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="ButtomTabsNavigator"
        options={{title: 'ButtomTabsNavigator'}}
        component={ButtomTabsNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MenuLateral;

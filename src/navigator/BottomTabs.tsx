import React from 'react';
import {Platform, Text} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab3Screen from '../screens/Tab3Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import {colores} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {ZoomIn} from 'react-native-reanimated';

const BottomTabs = () => {
  return Platform.OS === 'ios' ? <BottomTabsIOS /> : <BottomTabsAndroid />;
};

export default BottomTabs;

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'phone-portrait-outline';
              break;
            case 'Tab2Screen':
              iconName = 'navigate-circle-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
      })}>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};
const TabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
  const options = {
    headerShown: false,
    tabBarActiveTintColor: colores.primary,
    tabBarStyle: {
      borderTopColor: colores.primary,
      borderTopWidth: 0,
      elevation: 0,
    },
    tabBarLabelStyle: {
      fontSize: 15,
    },
  };

  return (
    <TabIOS.Navigator
      screenOptions={({route}) => ({
        ...options,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <TabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

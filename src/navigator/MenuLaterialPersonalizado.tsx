import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {style} from '../theme/appTheme';
import ButtomTabsNavigator from './BottomTabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuLateralPersonalizado = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen
        name="ButtomTabsNavigator"
        component={ButtomTabsNavigator}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuLateralPersonalizado;

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={{flex: 1}}>
      {/*  Contenedor del avatar*/}
      <View style={style.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.cbns.org.au/wp-content/uploads/2017/05/img_placeholder_avatar.jpg',
          }}
          style={style.avatar}
        />
      </View>
      {/*    Opciones de menu*/}
      <View style={style.menuContainer}>
        <TouchableOpacity
          style={style.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Icon name="grid-outline" size={20} style={style.menuLateralIcon} />
          <Text style={style.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.menuBoton}
          onPress={() => navigation.navigate('ButtomTabsNavigator')}>
          <Icon
            name="tablet-landscape-outline"
            size={20}
            style={style.menuLateralIcon}
          />
          <Text style={style.menuTexto}>ButtomTabsNavigator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon
            name="settings-outline"
            size={20}
            style={style.menuLateralIcon}
          />
          <Text style={style.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

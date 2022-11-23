import React, { useContext } from 'react';
import {Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import {colores, style} from '../theme/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);
  

  return (
    <View style={{...style.globalMargin, marginTop: insets.top + 20}}>
      <Text style={style.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
      <Icon name={authState.favoriteIcon} size={80} color={colores.primary}/>)
    }
      
    </View>
  );
};

export default SettingsScreen;

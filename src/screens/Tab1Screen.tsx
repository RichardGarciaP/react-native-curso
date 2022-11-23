import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {colores, style} from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../component/TouchableIcon';

const Tab1Screen = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...style.globalMargin, marginTop: insets.top}}>
      <Text style={style.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline"  />
        <TouchableIcon iconName="attach-outline"  />
        <TouchableIcon iconName="bonfire-outline"  />
        <TouchableIcon iconName="calculator-outline"  />
        <TouchableIcon iconName="images-outline"  />
        
      </Text>
    </View>
  );
};

export default Tab1Screen;

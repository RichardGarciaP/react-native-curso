import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {style} from '../theme/appTheme';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={style.globalMargin}>
      <Text style={style.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default Tab1Screen;

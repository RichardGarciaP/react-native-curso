import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {style} from '../theme/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  console.log(insets);

  return (
    <View style={{...style.globalMargin, marginTop: insets.top + 20}}>
      <Text style={style.title}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

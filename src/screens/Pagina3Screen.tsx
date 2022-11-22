import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen: FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text style={style.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;

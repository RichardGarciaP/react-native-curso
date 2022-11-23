import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {style} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface RouteParams {
  id: number;
  nombre: string;
}

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUsername, authState:{isLoggedIn}} = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({title: params.nombre});
    if(isLoggedIn) changeUsername(params.nombre)
  }, []);

  return (
    <View style={style.globalMargin}>
      <Text style={style.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;

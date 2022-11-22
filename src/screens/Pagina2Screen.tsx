import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'test',
    });
  }, []);

  return (
    <View>
      <Text style={style.title}>Pagina2Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;

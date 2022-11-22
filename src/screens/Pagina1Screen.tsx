import React, {FC, useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={style.btnDrawer}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color="#900" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={style.globalMargin}>
      <Text style={style.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/*<Button
        title="Ir Persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />*/}
      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...style.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={style.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...style.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Maria',
            })
          }>
          <Text style={style.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;

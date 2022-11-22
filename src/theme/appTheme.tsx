import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const style = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: 'black',
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    color: 'black',
  },
  menuLateralIcon: {
    marginRight: 5,
  },
  menuBoton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTexto: {
    fontSize: 20,
    color: 'black',
  },

  btnDrawer: {
    paddingLeft: 10,
  },
});

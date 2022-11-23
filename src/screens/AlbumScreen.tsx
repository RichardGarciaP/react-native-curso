import React, { useContext } from 'react';
import {View, Text, Button} from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

  const {logout, authState} = useContext(AuthContext)

  return (
    <View>
      <Text>AlbumScreen</Text>
      {authState.isLoggedIn && (
        <Button title='SignOut' onPress={logout} />
      )}
    </View>
  );
};

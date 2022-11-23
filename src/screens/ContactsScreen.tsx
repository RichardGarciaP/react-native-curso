import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { style } from '../theme/appTheme';

export const ContactsScreen = () => {

  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={style.globalMargin}>
      <Text>ContactsScreen</Text>
      {!authState.isLoggedIn && (
        <Button title='SignIn' onPress={signIn} />
      )}
    </View>
  );
};

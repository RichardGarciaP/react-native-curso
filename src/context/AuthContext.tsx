import {createContext, useReducer} from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (iconName:string) => void;
  logout: () => void;
  changeUsername: (username:string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({type: 'signIn'})
  }

  const changeFavIcon = (iconName:string) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  const changeUsername = (username:string) => {
    dispatch({type: 'changeUsername', payload:username})
  }

  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        signIn,
        changeFavIcon, 
        logout,
        changeUsername
      }}>
      {children}
    </AuthContext.Provider>
  );
};

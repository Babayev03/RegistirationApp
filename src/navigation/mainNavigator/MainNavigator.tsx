import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterStack from '../stacks/register/RegisterStack';
import LoginStack from '../stacks/login/LoginStack';
import MainStack from '../stacks/main/MainStack';
import ConfirmStack from '../stacks/confirm/ConfirmStack';
import ForgotStack from '../stacks/forgotPassword/ForgotStack';
import UpdatePassStack from '../stacks/updatePassword/UpdatePassStack';
import ConfirmForUpdate from '../screens/confirm/ConfirmScreenForUpdate';

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Update"
          component={UpdatePassStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmForUpdate"
          component={ConfirmForUpdate}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConfirmScreen from '../../screens/confirm/ConfirmScreen';

const ConfirmStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConfirmStack"
        component={ConfirmScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ConfirmStack;

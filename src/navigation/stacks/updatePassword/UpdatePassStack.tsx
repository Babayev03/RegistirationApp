import {createStackNavigator} from '@react-navigation/stack';
import UpdatePassword from '../../screens/updatePassword/UpdatePassScreen';

const Stack = createStackNavigator();

const UpdatePassStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UpdatePass"
        component={UpdatePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UpdatePassStack;

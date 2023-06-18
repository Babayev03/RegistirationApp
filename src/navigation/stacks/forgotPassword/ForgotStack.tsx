import {createStackNavigator} from '@react-navigation/stack';
import ForgotScreen from '../../screens/forgotPassword/ForgotScreen';

const Stack = createStackNavigator();

const ForgotStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ForgotStack" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

export default ForgotStack;

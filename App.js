import Home from './src/screen/Home/Home.js';
import Auth from './src/screen/Auth/Auth.js';
import Reg from './src/screen/Reg/Reg.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Auth' component={Auth} />
        <Stack.Screen name='Reg' component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/login';
import HomeScreen from './Components/Home_screen';
import Settings from './Screens/settings';
import Metas from './Screens/metas';
import Registro from './Screens/register';

export type RootStackParamList = {
  Login: undefined;
  Home: { newGoal: string } | undefined;
  Settings: undefined;
  Metas: undefined;
  Registro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Metas" component={Metas} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

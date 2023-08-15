import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Registration from './Pages/Student/Registration';
import Login from './Pages/Login';
import SwitchUser from './Pages/Common/SWitchUser';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='SwitchUser'
          screenOptions={{headerShown:false,}}
        >
           <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />


           <Stack.Screen name='Registration' component={Registration} />
           <Stack.Screen name='Login' component={Login} />
           <Stack.Screen name='SwitchUser' component={SwitchUser} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

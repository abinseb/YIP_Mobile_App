import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Registration from './Pages/Student/Registration';
import Login from './Pages/Login';
import SwitchUser from './Pages/Common/SWitchUser';
import StudentHome from './Pages/Student/StudentHome';
import CommonHome from './Pages/Common/CommonHome';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='CommonHome'
          screenOptions={{headerShown:false,}}
        >
           <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
          <Stack.Screen name='CommonHome' component={CommonHome}/>

           <Stack.Screen name='Registration' component={Registration} />
           <Stack.Screen name='Login' component={Login} />
           <Stack.Screen name='SwitchUser' component={SwitchUser} />
          <Stack.Screen name ='StudentHome' component={StudentHome} />
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

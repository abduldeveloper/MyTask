import React from 'react';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName='Splash'
          >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            initialRouteName={'Splash'}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

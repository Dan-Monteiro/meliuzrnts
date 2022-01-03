
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import List from './Screens/List';

const Routes: React.FC = () => {

  const Stack = createStackNavigator()

  return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  default: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Routes;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Contact from '../../Screens/Contact';
import Home from '../../Screens/Home';
import List from '../../Screens/List';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from '../../Screens/Details';

const Tabs = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  const NavigationTabs = () => {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
          }}>
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="List"
            component={List}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="clipboard-list-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Details"
            component={Details}
            options={{
              tabBarLabel: 'Detalhes',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="information-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="contacts-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  };

  return <NavigationTabs />;
};

export default BottomNavigation;

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

export const AppTabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions :{
        tabBarLabel : "Donate Books",
      }
    },
    Exchange: {
      screen: ExchangeScreen,
      navigationOptions :{
        tabBarLabel : "Book Request",
      }
    }
  });
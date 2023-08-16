import * as React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeStack} from './HomeStack';
import {styles} from './styles';
import {FavouritesScreen} from '../screens/Favourites';
import {BagScreen} from '../screens/Bag';
import {ProfileScreen} from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export const TabStack = () => (
  <Tab.Navigator
    labeled={false}
    activeColor="#f09f58"
    inactiveColor="#fff"
    barStyle={styles.barStyle}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="home-outline" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={FavouritesScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="heart-outline" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={BagScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="basket-outline" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="person-outline" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

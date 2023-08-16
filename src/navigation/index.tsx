import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from '../screens/Details';
import {TabStack} from './TabStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="tabStack"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          options={{
            gestureEnabled: true,
          }}
          name="tabStack"
          component={TabStack}
        />
        <Stack.Screen
          name="detailsScreen"
          component={DetailsScreen}
          options={{presentation: 'transparentModal', animation: 'fade'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

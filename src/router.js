import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ReserveScene, AddReserveScene} from './features/reserve';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reverve list" component={ReserveScene} />
        <Stack.Screen name="Add Reverve" component={AddReserveScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

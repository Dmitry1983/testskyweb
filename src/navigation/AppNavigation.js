import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Screen00, Screen01 } from '../screens'
import ROUTE from '../constants/route'

const Stack = createStackNavigator()

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SCREEN00}
      headerMode="none"
      mode="card"
    >
      <Stack.Screen name={ROUTE.SCREEN00} component={Screen00} />
      <Stack.Screen name={ROUTE.SCREEN01} component={Screen01} />
    </Stack.Navigator>
  )
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation

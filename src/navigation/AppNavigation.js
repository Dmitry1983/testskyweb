import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Screen00, Screen01, Screen02, ScreenSettings } from '../screens'
import ROUTE from '../constants/route'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const TabNavigator = createBottomTabNavigator()

function ButtonTab() {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: 'lightyellow',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 14 },
        style: {
          alignItems: 'center',
          backgroundColor: 'black',
        },
      }}
    >
      <TabNavigator.Screen
        name="Screen01"
        component={Screen01}
        options={{ tabBarLabel: 'SCREEN 01' }}
      />
      <TabNavigator.Screen
        name="Screen02"
        component={Screen02}
        options={{ tabBarLabel: 'SCREEN 02' }}
      />
    </TabNavigator.Navigator>
  )
}

function DrawerTab() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={ButtonTab} />
      <Drawer.Screen name="Settings" component={ScreenSettings} />
    </Drawer.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SCREEN00}
      headerMode="none"
      mode="card"
    >
      <Stack.Screen name={ROUTE.SCREEN00} component={Screen00} />
      <Stack.Screen name="Drawer" component={DrawerTab} />
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

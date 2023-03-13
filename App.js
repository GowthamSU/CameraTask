import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
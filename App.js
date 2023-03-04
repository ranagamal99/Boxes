import { StatusBar } from 'expo-status-bar';
// import {  View } from 'react-native';

import { Boxes } from './components/Boxes';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LargeBox } from './components/LargeBox';
import { MeduimBox } from './components/MeduimBox';
import { SmallBox } from './components/SmallBox';
// import { Hepatitis } from './components/hepatitis';
// import { Kidney } from './components/kidney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

<NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen  name="Boxes" component={Boxes}  />
        <Stack.Screen  name="LargeBox" component={LargeBox}  />
        <Stack.Screen  name="MeduimBox" component={MeduimBox}  />
        <Stack.Screen  name="SmallBox" component={SmallBox}  />
        {/* <Stack.Screen  name="Hepatitis C" component={Hepatitis}  />
        <Stack.Screen  name="Kidney" component={Kidney}  /> */}




      </Stack.Navigator>
    </NavigationContainer>

  
  );
}



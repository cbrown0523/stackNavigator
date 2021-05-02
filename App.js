import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/Home';
import Third from './src/components/Third';
import Fourth from './src/components/Fourth';
import Fifth from './src/components/Fifth';
import Second from './src/components/Second';
import Nav from './src/components/Nav'
const Stack = createStackNavigator();
class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Nav />
        <Stack.Navigator initialRouteName="Home" 
        screenOptions= {{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey' 
          },
          headerTitleStyle :{
            fontWeight: 'bold',
          },
          headerTintColor: 'black',
        }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={Second} />
          <Stack.Screen name="Third" component={Third} />  
          <Stack.Screen name="Fourth" component={Fourth} />

          <Stack.Screen name="Fifth" component={Fifth} />


          

        </Stack.Navigator>
      </NavigationContainer>
    );
  }

};


export default App;
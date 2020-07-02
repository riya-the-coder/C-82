import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen.js'
import AppTabNavigator from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator.js';


export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
     <AppContainer/>
    </View>
  );
}
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
 Drawer:{screen:AppDrawerNavigator}
})
const AppContainer=createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

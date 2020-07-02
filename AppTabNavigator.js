import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import createBottomTabNavigator from 'react-navigation-tabs';
import BookDonateScreen from '../screens/bookDonateScreen';
import BookRequestScreen from '../screens/bookRequestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20,height:20}}></Image>,
            tabBarLabel:"Donate Book"
        }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,height:20}}></Image>,
            tabBarLabel:"Book Request"
        }
    }
})
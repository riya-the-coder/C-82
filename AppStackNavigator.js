import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {BookDonateScreen} from '../screens/bookDonateScreen';
import {ReceiverDetailsScreen} from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator=createStackNavigator({
    BookDonateList:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false,
        }
    },
    ReceiverDetails:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false,
        }
    }
},
{initialRouteName:'BookDonateList'}
)
import react from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import {CustomSideBarMenu} from './CustomSideBarMenu';
import {SettingScreen} from '../screens/SettingScreen';
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyDonation:{
        screen:MyDonationScreen
    },
    Setting:{
        screen:SettingScreen
    } 
    },
    {
    contentComponent:CustomSideBarMenu
    },
{
    initialRouteName:'HOME'
}
)

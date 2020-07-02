import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon} from 'react-native-elements';
 const MyHeader=props =>{
     return(
         <Header 
centerComponent={{text:props.title,style:{color:'blue', fontSize:20, fontWeight:'bold'}}}
backgroundColor='#eaf8fe'
></Header>
     )
 }
 export default MyHeader;
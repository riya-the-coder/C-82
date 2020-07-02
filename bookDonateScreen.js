import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import db from '../config';
import MyHeader from '../components/MyHeader';
export default class BookDonateScreen extends React.Component{
    constructor(){
        super();
        this.state={
            requestedBookList:[]
        }
        this.requestReference=null;
    }
    getRequestedBookList=() => {
        this.requestReference=db.collection("requested_books")
        .onSnapshot((snapshot) => {
            var requestedBookList=snapshot.docs.map(document => document.data());
            this.setState({
                requestedBookList:requestedBookList
            })
        })
    }
    componentDidMount(){
        this.getRequestedBookList();
    }
    componentWillUnmount(){
        this.requestReference();
    }
    keyExtractor=(item,index) => index.toString()
    renderItem=({item,i})  => {
        return(
            <listItem
            key={i}
            title={item.book_name}
            subtitle={item,reason_to_request}
            titleStyle={{color:'black', fontWeight:'bold'}}
            rightElement={<TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate("ReceiverDetais", {"details":item})
            }}>
                <Text style={{color:'white'}}>VIEW</Text>
            </TouchableOpacity>}
            bottomDivider
           / >
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
<MyHeader title="donate books"/>
<View style={{flex:1}}>
    {
        this.state.requestedBookList.length===0
        ?(<View style={styles.subContainer}>
            <Text style={{fontSize:20}}>LIST OF ALL REQUESTED BOOKS</Text>
            </View>)
            :(
                <FlatList keyExtractor={this.keyExtractor}
                data={this.state.requestedBookList}
                renderItem={this.renderItem}>

                </FlatList>
            )
    }
</View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
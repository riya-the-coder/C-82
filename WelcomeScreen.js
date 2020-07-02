import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Modal} from 'react-native';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            isModalVisible:'false',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:'',
        }
 }
 showModal=() => {
     return(
         <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible}>
             <View style={styles.modalContainer}>
                 <ScrollView style={{width:'100%'}}>
<KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
<Text style={styles.modalTitle}>REGISTRATION</Text>
<TextInput style={styles.formTextInput}  
placeholder={"first name"}
maxLength={8}
onChangeText={(text) => {
    this.setState({
        firstName:text
})
}}
>

</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"last name"}
maxLength={8}
onChangeText={(text) => {
    this.setState({
        lastName:text
})
}}
>

</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"address"}
multiline={true}
onChangeText={(text) => {
    this.setState({
       address:text
})
}}
>

</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"contact"}
maxLength={10}
keyboardType={'numeric'}
onChangeText={(text) => {
    this.setState({
    contact:text
})
}}
>

</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"email"}
keyboardType={'email-address'}
onChangeText={(text) => {
    this.setState({
       email:text
})
}}
>

</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"password"}
secureTextEntry={true}
onChangeText={(text) => {
    this.setState({
    password:text
})
}}
>
</TextInput>
<TextInput style={styles.formTextInput}  
placeholder={"confirmPassword"}
secureTextEntry={true}
onChangeText={(text) => {
    this.setState({
    confirmPassword:text
})
}}
>
</TextInput>
<View style={styles.modalBackButton}>

<TouchableOpacity styles={styles.registerButton} onPress={() => {
    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
}}>
<Text style={styles.registerButtonText}>REGISTER</Text>
</TouchableOpacity>
</View>
<View style={styles.modalBackButton}>

<TouchableOpacity styles={styles.registerButton} onPress={() => {
   this.setState({"isModalVisible":false})
}}>
<Text style={styles.registerButtonText}>CANCEL</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>
                 </ScrollView>
             </View>
         </Modal>
     )
 }
 userSignUp=(emailId,password,confirmPassword) =>{
     if(password!==confirmPassword){
         return Alert.alert("Password does not match\n check your password")
     }
     else{
     firebase.auth().createUserWithEmailAndPassword(emailId,password)
     .then((Response) => {
         return Alert.alert("User added Successfully")
     })
     .catch(function(error){
var errorCode=error.code;
var errorMessage=error.message;
return Alert.alert(errorMessage)
     })
     db.collection('users').add({
         first_name:this.state.firstName,
         last_name:this.state.lastName,
       mobile_number:this.state.contact,
       username:this.state.emailId,
       address:this.state.address,
     })
   }
}
   userLogin=(emailId,password) =>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(() => {
      this.props.navigation.navigate('Donate')
    })
    .catch(function(error){
var errorCode=error.code;
var errorMessage=error.message;
return Alert.alert(errorMessage)
    })
  }

    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    {this.showModal()}
                     </View>
                <View>
<Text style={styles.title}>BOOK SANTA</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text) => {
                        this.setState({
                            emailId:text
                        })
                    }}
                    >

                    </TextInput>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({
                            password:text
                        })
                    }}
                    >
            </TextInput> 
                    <TouchableOpacity 
                    style={[styles.button,{marginBottom:20, marginTop:20}]}
                    onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}
                    >
<Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}
                    >
<Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'orange',
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
    padding:10
    },
    buttonText:{
        color:'white',
        fontWeight:'200',
        fontSize:20,
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
     
     
     

})
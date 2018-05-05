import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Content, Container, Form, Left, Button, Header, Icon ,Input, Item, Label} from 'native-base';
import { Team } from './Team';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC3bgQp8O2GH3t0TbCSz5u9F_7l3W_2ez4",
    authDomain: "login-85f08.firebaseapp.com",
    databaseURL: "https://login-85f08.firebaseio.com",
    projectId: "login-85f08",
    storageBucket: ""
};

firebase.initializeApp(firebaseConfig);


export class Register extends Component
{
    constructor(props){
        super(props)
        this.state=({
            email:'',
            password:''
        })
    }

    logInUser = (email,password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(this.props.navigation.navigate('Team'))
        }
        catch(error){
            console.log(error.toString())
        }
    }

    signUpUser = (email,password) => {
        try{
            if(this.state.password.length<6){
                alert("Password should be of atleast 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
        }
        catch(error){
            console.log(error.toString())
        }
    }

  render(){
    return(
        <Container style={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input autoCorrect={false} autoCapitalize="none"
                    onChangeText={(email)=>this.setState({email})}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input autoCorrect={false} autoCapitalize="none" secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}/>
                </Item>
                <Button style={styles.button} rounded success
                onPress = {() => this.logInUser(this.state.email,this.state.password)}>
                <Text style={styles.myText}>                                    Login</Text>
                </Button>
                <Button style={styles.button} rounded primary
                onPress= {()=>this.signUpUser(this.state.email,this.state.password)}>
                <Text style={styles.myText}>                                    Sign Up</Text>
                </Button>
            </Form>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center'
    },
    button: {
        marginTop:10,
        width:'100%',
        height:40,
    },
    myText:{
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
    }

});
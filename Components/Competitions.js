import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import { Register } from './Register';


export class Competitions extends Component
{
  render(){
    return(
        <View style={styles.background}>
            <ScrollView>
                <View>
                    <TouchableHighlight>
                        <Button color='#50d433' style={styles.button}
                        onPress={()=> this.props.navigation.navigate('Register')}
                        title="Computer Science" style={styles.myText}/>
                    </TouchableHighlight>
                    <Image  
                    style= {styles.image}
                    source={require('../Images/programming.png')}
                    onPress={()=> this.props.navigation.navigate('Register')}/>
                </View>
                <View>
                    <Button 
                    onPress={()=> this.props.navigation.navigate('Register')}
                    title="Gaming" style={styles.myText}/>
                    <Image 
                    style= {styles.image}
                    source={{uri: 'http://www.agfh.ca/wp-content/uploads/2017/06/gaming.png'}}/>
                </View>
                <View>
                    <Button color='#ab82ff'
                    onPress={()=> this.props.navigation.navigate('Register')}
                    title="Designing" style={styles.myText}/>
                    <Image 
                    style= {styles.image}
                    source={{uri: 'http://www.freepngimg.com/download/graphic_design/11-2-graphic-design-png-file.png'}}/>
                </View>
                <View>
                    <Button color='#ff7f50'
                    onPress={()=> this.props.navigation.navigate('Register')}
                    title="Business" style={styles.myText}/>
                    <Image 
                    style= {styles.image}
                    source={{uri: 'http://www.freepngimg.com/download/business/7-2-business-transparent.png'}}/>
                </View>
                <View>
                    <Button color='#1F38F3'
                    onPress={()=> this.props.navigation.navigate('Register')}
                    title="General/Logic" style={styles.myText}/>
                    <Image 
                    style= {styles.image}
                    source={{uri: 'https://steemitimages.com/DQmTQHXsaSHGgSCQsEGaDpBE726e5k9Lxhqpv7xfb3s4VGd/Logic.png'}}/>
                </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#4cd137'
    },
    myText:{
        textAlign:'center',
        color: 'grey',
        fontWeight: 'bold',
        fontFamily:'Arial',
        fontSize:20,
        textShadowRadius:15,
        textShadowColor:'grey',
    },
    image: {
        backgroundColor:'white',
        flex:2,
        width:400,
        height:200,
        margin:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderColor:'green'
    },
    button:{
        width:200
    }

});
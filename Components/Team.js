import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';


export class Team extends Component
{
  render(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.cart} source={require('../Images/cart2.png')}/>
                    <Text style={styles.logo}>E-Commerce</Text>
                </View>
                <View>
                    <ImageBackground style={styles.banner} source={require('../Images/banner2.png')}>
                    <Text style={styles.bannerOverlay}>-React-Native-</Text>
                    </ImageBackground>
                </View>
                <View style={styles.rowContainer}>
                    <Image style={styles.shirt} source={require('../Images/shirt.png')}/>
                    <Image style={styles.shoes} source={require('../Images/shoes.png')}/>
                </View>
                <View>
                    <Image style={styles.suits} source={require('../Images/suits.png')}/>
                </View>
                <View style={styles.rowContainer}>
                    <Image style={styles.shirt} source={require('../Images/shirt.png')}/>
                    <Image style={styles.shoes} source={require('../Images/shoes.png')}/>
                </View>
                <View>
                    <Image style={styles.suits} source={require('../Images/watch.png')}/>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        flexWrap: 'wrap',
        backgroundColor:'#ced6e0'
    },
    rowContainer:{
        flex:1,
        flexDirection:'row',
    },
    header: {
        height:80,
        flexDirection:'row',
        backgroundColor:'#2f3542',
        padding:20,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:4,
    },
    cart: {
        height:40,
        width:40
    },
    logo: {
        fontSize:20,
        fontStyle:'italic',
        color:'#292929',
        marginLeft:10,
        color:'#ffffff'
    },
    banner: {
        width : '100%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 5,
        backgroundColor:'black',
        borderBottomWidth:4
    },
    shirt: {
        flex:2,
        height: 150,
        width:250,
        marginLeft:5,
        marginTop:5,
        borderBottomWidth:4,
        backgroundColor:'black'
    },
    shoes:{
        flex:1,
        height: 150,
        width:100,
        marginLeft:5,
        marginRight:3,
        marginTop:5,
        borderBottomWidth:4,
        backgroundColor:'black'
    },
    suits: {
        width : '98%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 5,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'black',
        borderBottomWidth:4
    },
    bannerOverlay: {
        elevation:1,
        alignSelf:'center',
        fontSize:40,
        fontWeight:'bold',
        backgroundColor:'rgba(255,255,255,0.6)',
        color:'#292929'
    }

});
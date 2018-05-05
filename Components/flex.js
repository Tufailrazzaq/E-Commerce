import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Button,Icon,Footer, Right, Title } from 'native-base';
import { View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

export class Flex extends Component {
  render() {
    return (
      <Container >
          <Header>
                <Left>
                    <Button transparent>
                         <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Register</Title>
                    </Body>
                <Right />
            </Header>
        <Content contenContainerStyle={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'red'}}>
            <Card>
                <CardItem header>
                <Text>NativeBase</Text>
                </CardItem>
                <CardItem>
                <Body>
                    <Text>
                    Pakistan[b] (Urdu: پاکِستان‬‎), officially the Islamic Republic of Pakistan (Urdu: اِسلامی جمہوریہ پاکِستان‬‎), is a country in South Asia. .
                    </Text>
                </Body>
                </CardItem>
                <CardItem footer>
                <Text>GeekyAnts</Text>
                </CardItem>
            </Card>
        </Content>
        <Footer></Footer>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    checkbox:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    itemCol:{
        flex:1,
        backgroundColor:'#ced6e0',
        marginBottom:5,
        marginLeft:0
    },
    input:{
        marginLeft:10,
    },
    container: {
        flex:1,
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'red'
    }
});
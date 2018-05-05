import React, {Component} from 'react';
import { Text, View, Stylesheet } from 'react-native';
import { Content, Container, Left, Button, Header, Icon} from 'native-base';


export class Sponsor extends Component
{
  render(){
    return(
        <Container>
            <Content contentContainerStyle={{
                flex:1,
                justifyContent: 'center',
                alignContent:'center'
            }}>
                <Text>Sponsor Screen</Text>
            </Content>
        </Container>
    );
  }
}
import React, { Component } from 'react';
import { Container, Header, Content, Icon, Button, Left, Right, Footer, Body, Title, Label, Form, Item, Input , CheckBox, Picker} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

export default class IconExample extends Component {
    constructor(){
        super();
        this.state={
            check:true
        }
    }

    onChangeValue(){
        this.setState({
            check:!this.state.check
        });
    }

  render() {
    const accomodationOpen = <Accomodation/>
    let accomodation= this.state.check? accomodationOpen : console.log('Submitted');

    return (
      <Container style={{backgroundColor:'#f1f2f6'}}>
          <Header style={styles.header}>
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
        <Content contenContainerStyle={{ flex:1, alignItem:'center', justifyContent:'center'}}>
            <Form>
                <Item floatingLabel>
                    <Label>Team Name</Label>
                    <Input/>
                </Item>
                <Item floatingLabel>
                    <Label>University</Label>
                    <Input/>
                    
                </Item>
                <Item >
                    <CheckBox color='orange' checked={this.state.check} onPress={() => this.onChangeValue()} style={styles.checkbox}/>
                    <Label style={{marginLeft:15,marginTop:20}}>Accomodation</Label>
                </Item>
                <Item >
                    {accomodation}
                </Item>
                <Label style={{marginLeft:8,marginTop:20}}>Competetions</Label>
                <Picker
                    mode="dropdown"
                    iosHeader="Competetions"
                    >
                    <Item label="Speed Programming" value="key0" />
                    <Item label="Fifa" value="key1" />
                    <Item label="Counter Strike" value="key2" />
                    <Item label="Login Hunt" value="key3" />
                    <Item label="Game Development" value="key4" />
                </Picker>
            </Form>
        </Content>
      </Container>
    );
  }
}


const styles=StyleSheet.create({
    header:{
        backgroundColor:'#F79F1F',
    },
    checkbox:{
        marginTop:20,
        marginLeft:120,
    },
    accomodationopen:{
        marginLeft:5,
        marginRight:5,
        flex:1,
        backgroundColor:'#ffbe76',
        marginTop:20
    },
    item:{
        flex:1
    }
});




export class Accomodation extends Component{
    render(){
        return(
            <Form style={{flex:1,flexDirection:'row'}}>
                <Item floatingLabel style={styles.accomodationopen}>
                    <Label style={{textAlign:'center', color: 'white', fontWeight: 'bold', fontSize:20,}}>From</Label>
                    <Input style={{textAlign:'center', color: 'white'}}/>
                </Item>
                <Item floatingLabel style={styles.accomodationopen}>
                    <Label style={{textAlign:'center', color: 'white', fontWeight: 'bold', fontSize:20,}}>To</Label>
                    <Input style={{textAlign:'center', color: 'white'}}/> 
                </Item>
            </Form>
        );
    }
}





import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { Team } from './Components/Team';
import IconExample, { Icon } from './Components/Icon';
import { Flex } from './Components/flex';
import { Register } from './Components/Register';
import { Sponsor } from './Components/Sponsor';
import { Competitions } from './Components/Competitions';




export default class app extends Component
{
  render(){
    return(
        <AppNavigator/>
    );
  }
}

const AppNavigator = DrawerNavigator({
  Competitions: {screen: Competitions},
  Register: { screen: Register },
  Team: {screen :Team},
  Sponsors: {screen:Sponsor},
  Icon: {screen:IconExample},
  Flex: {screen:Flex}
},{
  initialRouteName: 'Icon'
}
);


AppRegistry.registerComponent('app', () => app);
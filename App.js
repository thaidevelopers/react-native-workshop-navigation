import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Minimal from './Minimal';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

const RootStack = createStackNavigator(
  {
    Home: Minimal,
    Two: PageTwo,
    Three: PageThree,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

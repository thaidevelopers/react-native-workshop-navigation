import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PageTwo extends Component {

  static navigationOptions = {
      title: '#2',
    };

  constructor(props)
  {
    super(props);

    this.state = {
      someParameter: 0,
      someBundleParameter: this.props.navigation.getParam('someBundleParameter', ''),
    }

  }

  render()
  {
    return(
      <View>
        <Text>This is PageTwo.</Text>
        <Text>Parameter value is {this.state.someBundleParameter}</Text>
      </View>
    );
  }
}

export default PageTwo

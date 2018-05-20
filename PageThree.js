import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PageThree extends Component {

  static navigationOptions = {
      title: '#3',
    };

  constructor(props)
  {
    super(props);

    this.state = {
      someOtherParameter: 0,
      someOtherBundleParameter: this.props.navigation.getParam('someOtherBundleParameter', ''),
    }

  }

  render()
  {
    return(
      <View>
        <Text>This is PageThree.</Text>
        <Text>Parameter value is {this.state.someOtherBundleParameter}</Text>
      </View>
    );
  }
}

export default PageThree

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Minimal extends Component {

  static navigationOptions = {
      title: 'Minimal',
    };

  constructor(props)
  {
    super(props);

    this.state = {
      someParameter: 0,
    }

  }

  render()
  {
    return(
      <View>
        <Text>This is Minimal line of code.</Text>
        <Button
                title="Go to PageTwo"
                onPress={() =>
                  this.props.navigation.navigate('Two', { someBundleParameter: 'I come from Minimal.' })
                }
              />
        <Button
                title="Go to PageThree"
                onPress={() =>
                  this.props.navigation.navigate('Three', { someOtherBundleParameter: 'I come from Minimal.' })
                }
              />
      </View>
    );
  }
}

export default Minimal

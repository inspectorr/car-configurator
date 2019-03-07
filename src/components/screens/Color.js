import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';

export default class Color extends Component {
  state = {
    forwardEnabled: false,
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View><Bar
          title='Цвет'
          back={true}
          onBack={() => {this.props.navigate('Equipment')}}
        /></View>

        <View>
          <ForwardButton
              onPress={() => {}}
              title='Далее'
              enabled={this.state.forwardEnabled}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

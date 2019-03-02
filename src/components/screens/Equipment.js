import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';

export default class Equipment extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View><Bar
          title='Комплектация'
          back={true}
          onBack={() => {this.props.navigate('Model')}}
        /></View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{this.props.userData.name}</Text>
        </View>

        <View>
          <ForwardButton
              onPress={() => {this.props.navigate('Model')}}
              title='Далее'
          />
        </View>
      </View>
    );
  }
}

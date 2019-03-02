import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class ForwardButton extends Component {
  render() {
    const disabled = !this.props.enabled;

    const height = 40;
    const title = this.props.title.toUpperCase();
    const onPress = this.props.onPress;
    return (
        <TouchableOpacity
          onPress={() => onPress()}
          disabled={disabled}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: disabled ? '#DFDFDF' : '#2196F3',
              height: height}}
          >
            <Text
              style={{
                color: disabled ? '#ACACAC' : 'white',
                fontSize: 0.4*height,
                fontWeight: '700'
            }}>
                {title}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }
}

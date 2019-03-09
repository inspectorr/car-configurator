import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Bar from './addons/Bar';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View><Bar
          title='Готово'
          back={true}
          onBack={(screen) => {this.props.navigate('Color')}}
        /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

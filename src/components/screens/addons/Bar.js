import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


export default class Bar extends Component {
  render() {
    const title = this.props.title.toUpperCase();

    let button = null;
    if (this.props.back) {
      button =
      <TouchableOpacity
          style={styles.button}
          onPress={() => {this.props.onBack()}}
      >
        <View>
          <Text style={styles.buttonText}>НАЗАД</Text>
        </View>
      </TouchableOpacity>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {button}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#262F3D',
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    zIndex: 1000,
  },

  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },

  buttonContainer: {
    flex: 1,
    height: 60,
    width: 150,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    height: 32,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  }
});

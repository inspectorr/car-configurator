import React, { Component } from 'react';
import { View } from 'react-native';

import * as firebase from 'firebase';

import Model from './screens/Model';
import Equipment from './screens/Equipment';

import arrayFromOrderedObject from './accessory/arrayFromOrderedObject';

export default class App extends Component {
  state = {
    Screen: {
      component: Model,
      userData: null,
    },
    cars: null,
  }

  componentDidMount() {
    const db = firebase.database();
    const carsRef = db.ref('cars');
    carsRef.on('value', (snap) => {
      const cars = arrayFromOrderedObject(snap.val());
      console.log('Data recieved: ', cars);
      this.setState({ cars });
    });
  }

  navigate(screen, userData) {
    if (screen === 'Model') {
      this.setState({
        Screen: {
          component: Model,
          userData,
        }
      });
    }
    if (screen === 'Equipment') {
      this.setState({
        Screen: {
          component: Equipment,
          userData,
        }
      });
    }
  }

  render() {
    const Screen = this.state.Screen;
    return (
      <View style={{flex: 1}}>
        <Screen.component
          navigate={(screen, userData) => this.navigate(screen, userData)}
          cars={this.state.cars}
          userData={Screen.userData}
        />
      </View>
    );
  }
}

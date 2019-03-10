import React, { Component } from 'react';
import { View } from 'react-native';

import * as firebase from 'firebase';

import Model from './screens/Model';
import Equipment from './screens/Equipment';
import Color from './screens/Color';
import Summary from './screens/Summary';

import arrayFromOrderedObject from './accessory/arrayFromOrderedObject';

export default class App extends Component {
  state = {
    screens: {
      'Model': Model,
      'Equipment': Equipment,
      'Color': Color,
      'Summary': Summary,
    },

    activeScreen: Model,

    cars: null,

    dataSelection: {
      model: null,
      equipment: null,
      color: null,
    }
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

  navigate(screen, key, select) {
    const activeScreen = this.state.screens[screen];
    if (key === undefined || select === undefined) {
      this.setState({ activeScreen });
      return;
    }

    const dataSelection = Object.assign({}, this.state.dataSelection);
    dataSelection[key] = select;
    this.setState({ activeScreen, dataSelection });

    console.log('selection update', dataSelection);
  }

  resetSelection() {
    const dataSelection = Object.assign({}, this.state.dataSelection);
    for (let key in dataSelection) {
      dataSelection[key] = null;
    }
    this.setState({ dataSelection });

    console.log('selection reset', dataSelection);
  }

  render() {
    const Screen = this.state.activeScreen;
    return (
      <View style={{flex: 1}}>
        <Screen
          cars={this.state.cars}
          dataSelection={this.state.dataSelection}
          resetSelection={() => this.resetSelection()}
          navigate={(screen, key, select) => this.navigate(screen, key, select)}
        />
      </View>
    );
  }
}

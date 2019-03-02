import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';
import ModelsList from './addons/ModelsList';

export default class Model extends Component {
  render() {
    const cars = this.props.cars;

    let content = null;
    if (cars) {
      content = <ModelsList
        cars={cars}
        navigate={(screen, userData) => this.props.navigate(screen, userData)}
      />;
    } else {
      content = <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <ActivityIndicator size="large"/>
      </View>
    }

    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View><Bar back={false} title='Модель'></Bar></View>

        <View style={{flex: 1}}>
          {content}
        </View>

        <View>
          {
            // <ForwardButton
            //   onPress={() => {this.props.navigate('Equipment')}}
            //   title='Далее'
            // />
          }
        </View>
      </View>
    );
  }
}

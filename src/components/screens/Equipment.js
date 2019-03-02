import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import arrayFromOrderedObject from '../accessory/arrayFromOrderedObject';

import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';
import List from './addons/List';
import EquipmentItem from './addons/EquipmentItem';

export default class Equipment extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.forwardEnabled = false;
    this.equipments = arrayFromOrderedObject(this.props.userData.equipment);
    this.state.itemSelection = this.equipments.map((item) => false);
  }

  selectItem(index) {
    this.setState(prev => (
      {itemSelection: prev.itemSelection.map((item, i) => i === index)}
    ));
    this.enableForward();
  }

  enableForward() {
    this.setState({forwardEnabled: true})
  }

  render() {
    const equipments = this.equipments;
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View><Bar
          title='Комплектация'
          back={true}
          onBack={() => {this.props.navigate('Model')}}
        /></View>

        <View style={{flex: 1}}>
          <List
            title='Выберите комплектацию'
            titleFontSize={28}
            ListItem={EquipmentItem}
            data={equipments}
            selectItem={(index) => this.selectItem(index)}
            itemSelection={this.state.itemSelection}
            navigate={(screen, userData) => this.props.navigate(screen, userData)}
          />
        </View>

        <View>
          <ForwardButton
              onPress={() => {this.props.navigate('Model')}}
              title='Далее'
              enabled={this.state.forwardEnabled}
          />
        </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import arrayFromOrderedObject from '../accessory/arrayFromOrderedObject';


import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';
import List from './addons/List';
import EquipmentItem from './addons/EquipmentItem';

export default class Equipment extends Component {
  constructor(props) {
    super(props);

    this.model = this.props.dataSelection.model;
    this.equipments = arrayFromOrderedObject(this.model.equipment);

    this.state = {};
    this.state.forwardEnabled = false;
    this.state.selectedIndex = null;
  }

  componentWillMount() {
    if (this.props.dataSelection.equipment) {
      this.selectItem(this.props.dataSelection.equipment.order);
    }
  }

  selectItem(index) {
    this.setState({ selectedIndex: index });
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
          onBack={(screen) => {
            this.props.navigate('Model');
            this.props.resetSelection();
          }}
        /></View>

        <View style={{flex: 1}}>
          <List
            title='Выберите комплектацию'
            titleFontSize={28}
            ListItem={EquipmentItem}
            data={equipments}
            selectedIndex={this.state.selectedIndex}
            selectItem={(index) => this.selectItem(index)}
            navigate={(screen, key, select) => this.props.navigate(screen, key, select)}
          />
        </View>

        <View>
          <ForwardButton
              onPress={() => {
                this.props.navigate('Color', 'equipment', equipments[this.state.selectedIndex]);
              }}
              title='Далее'
              enabled={this.state.forwardEnabled}
          />
        </View>
      </View>
    );
  }
}
